<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    title="日志详情"
    width="50%"
    @ok="handleSubmit"
  >
    <Descriptions class="style-descriptions" :column="1" bordered size="small">
      <DescriptionsItem label="追踪ID">
        {{ rowRecord.traceId }}
      </DescriptionsItem>
      <DescriptionsItem label="系统模块">
        <Tag color="blue">
          {{ moduleDictMap.get(rowRecord.module) }}
        </Tag>
      </DescriptionsItem>
      <DescriptionsItem label="操作类型">
        <Tag
          :color="
            rowRecord.businessType === BusinessTypeEnum.DELETE ||
            BusinessTypeEnum.UNLOCK ||
            BusinessTypeEnum.CLOSE_GOOGLE_VERIFY
              ? 'warning'
              : 'green'
          "
        >
          {{ businessTypeDictMap.get(rowRecord.businessType) }}
        </Tag>
      </DescriptionsItem>
      <DescriptionsItem label="操作人员">
        {{ rowRecord.createBy }}
      </DescriptionsItem>
      <DescriptionsItem label="所属部门">
        {{ rowRecord.depName }}
      </DescriptionsItem>
      <DescriptionsItem label="操作IP">
        {{ rowRecord.host }}
      </DescriptionsItem>
      <DescriptionsItem label="操作地点">
        {{ rowRecord.location }}
      </DescriptionsItem>
      <DescriptionsItem label="操作状态">
        <Tag :color="rowRecord.businessStatus === BusinessStatusEnum.SUCCESS ? 'success' : 'error'">
          {{ businessStatusDictMap.get(rowRecord.businessStatus) }}
        </Tag>
      </DescriptionsItem>
      <DescriptionsItem label="操作时间">
        {{ rowRecord.createTime }}
      </DescriptionsItem>
      <DescriptionsItem label="接口地址">
        {{ rowRecord.uri }}
      </DescriptionsItem>
      <DescriptionsItem label="接口方法">
        {{ rowRecord.classMethod }}
      </DescriptionsItem>
      <DescriptionsItem label="请求方式">
        {{ rowRecord.method }}
      </DescriptionsItem>
      <DescriptionsItem label="请求参数">
        {{ rowRecord.param }}
      </DescriptionsItem>
      <DescriptionsItem label="响应参数">
        {{ rowRecord.result }}
      </DescriptionsItem>
      <DescriptionsItem v-if="rowRecord.errorMsg" label="错误信息">
        {{ rowRecord.errorMsg }}
      </DescriptionsItem>
    </Descriptions>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Descriptions, DescriptionsItem, Tag } from 'ant-design-vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { getOperationLogById } from '/@/api/sys/user';
  import { businessStatusDictMap, businessTypeDictMap, moduleDictMap } from '/@/api/sys/dict';
  import { BusinessStatusEnum, BusinessTypeEnum } from '/@/enums/userEnum';

  export default defineComponent({
    name: 'OperationLogDrawer',
    components: { BasicDrawer, Descriptions, DescriptionsItem, Tag },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const rowRecord = ref<Recordable>({});
      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        setDrawerProps({ showCancelBtn: false, okText: '关闭', confirmLoading: false });
        getOperationLogById(data.record.id).then((data) => {
          rowRecord.value = data;
        });
      });

      async function handleSubmit() {
        closeDrawer();
        emit('success');
      }

      return {
        rowRecord,
        moduleDictMap,
        businessTypeDictMap,
        businessStatusDictMap,
        BusinessTypeEnum,
        BusinessStatusEnum,
        registerDrawer,
        handleSubmit,
      };
    },
  });
</script>
<style lang="less">
  .style-descriptions {
    .ant-descriptions-item-label {
      width: 100px !important;
    }
  }
</style>
