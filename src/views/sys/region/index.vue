<template>
  <PageWrapper contentBackground>
    <template #extra>
      <a-button type="primary" @click="syncRegion">
        {{ t('common.syncText') }}
      </a-button>
    </template>
    <BasicTree
      title="行政区域"
      :renderIcon="renderIcon"
      ref="asyncTreeRef"
      :treeData="tree"
      :loading="treeLoading"
      :load-data="onLoadData"
    />
  </PageWrapper>
</template>
<script lang="ts">
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { defineComponent, ref, unref } from 'vue';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { syncRegionData, getRegionTree } from '/@/api/sys/region';
  import { BasicTree, TreeActionType, TreeItem } from '/@/components/Tree/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useGlobSetting } from '/@/hooks/setting';

  export default defineComponent({
    name: 'RegionManagement',
    components: { BasicTree, PageWrapper },
    setup() {
      const { t } = useI18n();
      const globSetting = useGlobSetting();
      const { createMessage } = useMessage();
      const { hasPermission } = usePermission();
      const asyncTreeRef = ref<Nullable<TreeActionType>>(null);
      const tree = ref<TreeItem[]>([]);
      const treeLoading = ref(false);

      function renderIcon() {
        return 'clarity:building-line';
      }

      function syncRegion() {
        syncRegionData().then(() => {
          treeLoading.value = true;
          createMessage.success('同步成功，稍后请重新获取最新的数据');
          treeLoading.value = false;
        });
      }

      function loadTreeData() {
        try {
          treeLoading.value = true;
          getRegionTree(0).then((data) => {
            tree.value = data;
          });
        } finally {
          treeLoading.value = false;
        }
      }

      function onLoadData(treeNode) {
        return new Promise((resolve: (value?: unknown) => void) => {
          const asyncTreeAction: TreeActionType | null = unref(asyncTreeRef);
          if (asyncTreeAction) {
            try {
              treeLoading.value = true;
              getRegionTree(treeNode.eventKey).then((data) => {
                asyncTreeAction.updateNodeByKey(treeNode.eventKey, { children: data });
                asyncTreeAction.setExpandedKeys([
                  treeNode.eventKey,
                  ...asyncTreeAction.getExpandedKeys(),
                ]);
              });
            } finally {
              treeLoading.value = false;
            }
          }

          resolve();
          return;
        });
      }

      return {
        t,
        tree,
        asyncTreeRef,
        treeLoading,
        renderIcon,
        syncRegion,
        loadTreeData,
        onLoadData,
        hasPermission,
      };
    },
    mounted() {
      this.loadTreeData();
    },
  });
</script>
