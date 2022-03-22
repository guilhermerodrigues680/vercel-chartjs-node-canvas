import opengraphCoverGen from  "../opengraph-cover-gen/opengraph-cover-gen";

export default async function handler(req, res) {
  try {
    await opengraphCoverGen.run();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "opss" });
    return;
  }

  res.status(200).json({ name: "ok" });
}
