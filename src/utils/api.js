const simulateSaveArticle = (article) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        savedArticle: {
          ...article,
          _id: `saved-${Date.now()}`,
          savedAt: new Date().toISOString(),
        },
      });
    }, 800);
  });
};

export { simulateSaveArticle };
