// image picker
export enum CropImagePickerErrorCode {
  E_PICKER_CANCELLED = 'E_PICKER_CANCELLED',
  E_NO_CAMERA_PERMISSION = 'E_NO_CAMERA_PERMISSION',
  E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR = 'E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR',
  E_NO_LIBRARY_PERMISSION = 'E_NO_LIBRARY_PERMISSION',
  E_NO_IMAGE_DATA_FOUND = 'E_NO_IMAGE_DATA_FOUND',
  E_CROPPER_IMAGE_NOT_FOUND = 'E_CROPPER_IMAGE_NOT_FOUND',
  E_ERROR_WHILE_CLEANING_FILES = 'E_ERROR_WHILE_CLEANING_FILES',
  E_CANNOT_SAVE_IMAGE = 'E_CANNOT_SAVE_IMAGE',
  E_CANNOT_PROCESS_VIDEO = 'E_CANNOT_PROCESS_VIDEO',
}
