const generateFormData = (file: File | null): FormData | null => {
  if (!file) {
    return null;
  }

  const gifFormData = new FormData();
  gifFormData.append('file', file);

  return gifFormData;
};

export default generateFormData;
