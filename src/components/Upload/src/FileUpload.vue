<template>
  <Upload
    v-model:fileList="fileList"
    :accept="accept"
    :customRequest="customRequest"
    :disabled="disabled"
    :list-type="listType"
    :multiple="multiple"
    name="file"
    @change="handleChange"
  >
    <div v-if="fileList.length < limit && !disabled">
      <a-button :loading="uploadBtnLoading" type="dashed">
        <cloud-upload-outlined />
      </a-button>
    </div>
  </Upload>
</template>
<script>
  import { Upload } from 'ant-design-vue';
  import { CloudUploadOutlined } from '@ant-design/icons-vue';
  import { nonProgressUploadApi, queryFileInfoApi } from '/@/api/sys/file';

  export default {
    name: 'FileUpload',
    components: { CloudUploadOutlined, Upload },
    props: {
      // text, picture 和 picture-card
      listType: {
        type: String,
        default: 'text',
      },
      limit: {
        type: Number,
        default: 1,
      },
      accept: {
        type: String,
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      // 相对路径多个逗号分隔
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:value', 'change'],
    data() {
      return {
        uploadBtnLoading: false,
        fileList: [],
      };
    },
    watch: {
      value: {
        immediate: true, //可以首次设置进到handler
        handler: function (val) {
          // 不能写成=> 这种函数，会导致this undefined
          // 首次回显
          if (val) {
            // 会进入两次的问题，加这个会无法拿到最后一次的变动
            // && this.fileList.length == 0
            queryFileInfoApi({ relativePaths: val, includeFileName: true }).then((data) => {
              this.fileList = data;
            });
          } else {
            this.fileList = [];
          }
        },
      },
    },
    methods: {
      // 上传和删除会触发变化
      handleChange({ file, fileList }) {
        if (file.status === 'uploading') {
          // 去除自带的上传数据
          this.fileList = fileList.slice(0, -1);
        }
        let paths = [];
        this.fileList.forEach((val) => {
          paths.push(val.relativePath);
        });
        const value = paths.join(',');
        this.$emit('update:value', value);
        this.$emit('change', value);
      },
      customRequest(formData) {
        this.uploadBtnLoading = true;
        nonProgressUploadApi({
          file: formData.file,
          name: formData.filename,
        })
          .then((res) => {
            this.fileList.push(res.data.data);
            this.handleChange({ file: res.data.data, fileList: this.fileList });
          })
          .finally(() => (this.uploadBtnLoading = false));
      },
    },
  };
</script>
