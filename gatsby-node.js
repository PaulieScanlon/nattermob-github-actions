exports.sourceNodes = ({ actions: { createNode }, createContentDigest }) => {
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();

  const timestamp = `h:${hours} | m:${mins} | s:${secs}`;
  // console.log('//// timestamp: ', timestamp);
  createNode({
    timestamp: timestamp,
    id: '123',
    internal: {
      type: 'built',
      contentDigest: createContentDigest(timestamp)
    }
  });
};
