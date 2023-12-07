// import { Storage } from '@google-cloud/storage';

export default async function gcpDelete(fileName) {
  try {
    const storage = new Storage();
    const bucketName = process.env.BUCKET_NAME;
    const bucket = storage.bucket(bucketName);
    // console.log("bucket", bucket);
    const file = bucket.file(
      `public/Hellob-949920/Cover1/Example-Productlarge-1697310481467-image2.webp`
    );

    const deleteFile = await file.delete();

    console.log("deleteFile", deleteFile);
    return deleteFile;
  } catch (error) {
    console.error(`Error deleting gs`, error);
  }
}
