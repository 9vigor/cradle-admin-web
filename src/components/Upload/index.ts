import { withInstall } from '/@/utils';
import basicUpload from './src/BasicUpload.vue';
import fileUpload from './src/FileUpload.vue';

export const BasicUpload = withInstall(basicUpload);
export const FileUpload = withInstall(fileUpload);
