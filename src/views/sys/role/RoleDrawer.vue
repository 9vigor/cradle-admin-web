<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="50%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm">
      <template #menu="{ model, field }">
        <BasicTree
          v-model:value="model[field]"
          :treeData="treeData"
          :fieldNames="{ title: 'title', key: 'key' }"
          checkable
        />
      </template>
    </BasicForm>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './role.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { BasicTree, TreeItem } from '/@/components/Tree';

  import { getMenuTree } from '/@/api/sys/menu';
  import { getRoleById, saveRole, updateRole } from '/@/api/sys/role';
  import {useI18n} from "/@/hooks/web/useI18n";

  export default defineComponent({
    name: 'RoleDrawer',
    components: { BasicDrawer, BasicForm, BasicTree },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const { t } = useI18n();
      const isUpdate = ref(true);
      const treeData = ref<TreeItem[]>([]);
      const rowId = ref('');
      const [registerForm, { resetFields, setFieldsValue, clearValidate, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
        baseColProps: { lg: 12, md: 24 },
      });
      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        await resetFields();
        setDrawerProps({ confirmLoading: false });
        // 需要在setFieldsValue之前先填充treeData，否则Tree组件可能会报key not exist警告
        treeData.value = (await getMenuTree(0)) as any as TreeItem[];

        treeData.value.forEach((e) => {
          e.title = t('menu.m' + e.key);
          if (e?.children) {
            e.children.forEach((c) => {
              c.title = t('menu.m' + c.key);
              if (c?.children) {
                c.children.forEach((d) => {
                  d.title = t('menu.m' + d.key);
                });
              }
            });
          }
        });

        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          await setFieldsValue({
            ...(await getRoleById(data.record.id)),
          });
          await clearValidate();
          rowId.value = data.record.id;
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增角色' : '编辑角色'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          if (unref(isUpdate)) {
            values.id = rowId.value;
            await updateRole(values);
          } else {
            await saveRole(values);
          }
          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return {
        getTitle,
        treeData,
        registerDrawer,
        registerForm,
        handleSubmit,
      };
    },
  });
</script>
