import { S3Object } from "../../models";

export const getS3ObjectSrc = (s3Object: S3Object | null | undefined):string => {
    if(!s3Object) return "";
    return `https://${s3Object.bucket}.s3.${s3Object.region}.amazonaws.com/public/${s3Object.key}`
}