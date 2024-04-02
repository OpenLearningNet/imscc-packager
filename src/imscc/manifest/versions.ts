export const manifest_attributes = {
    "1.3.0": {
        "xmlns": "http://www.imsglobal.org/xsd/imsccv1p3/imscp_v1p1",
        "xmlns:lom": "http://ltsc.ieee.org/xsd/imsccv1p3/LOM/resource",
        "xmlns:lomimscc": "http://ltsc.ieee.org/xsd/imsccv1p3/LOM/manifest",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xsi:schemaLocation": "http://www.imsglobal.org/xsd/imsccv1p3/imscp_v1p1 http://www.imsglobal.org/profile/cc/ccv1p3/ccv1p3_imscp_v1p2_v1p0.xsd http://ltsc.ieee.org/xsd/imsccv1p3/LOM/manifest http://www.imsglobal.org/profile/cc/ccv1p3/LOM/ccv1p3_lommanifest_v1p0.xsd http://ltsc.ieee.org/xsd/imsccv1p3/LOM/resource http://www.imsglobal.org/profile/cc/ccv1p3/LOM/ccv1p3_lomresource_v1p0.xsd"
    },
    "1.1.0": {
        "xmlns": "http://www.imsglobal.org/xsd/imsccv1p1/imscp_v1p1",
        "xmlns:lom": "http://ltsc.ieee.org/xsd/imsccv1p1/LOM/resource",
        "xmlns:lomimscc": "http://ltsc.ieee.org/xsd/imsccv1p1/LOM/manifest",
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xsi:schemaLocation": "http://www.imsglobal.org/xsd/imsccv1p1/imscp_v1p1 http://www.imsglobal.org/profile/cc/ccv1p1/ccv1p1_imscp_v1p2_v1p0.xsd http://ltsc.ieee.org/xsd/imsccv1p1/LOM/resource http://www.imsglobal.org/profile/cc/ccv1p1/LOM/ccv1p1_lomresource_v1p0.xsd http://ltsc.ieee.org/xsd/imsccv1p1/LOM/manifest http://www.imsglobal.org/profile/cc/ccv1p1/LOM/ccv1p1_lommanifest_v1p0.xsd"
    }
}

export type Version = keyof typeof manifest_attributes;

export const DEFAULT_VERSION: Version = "1.3.0";

export const manifest_attributes_for_version = (version: Version = DEFAULT_VERSION) => {
    const attributes: Record<string, string> = manifest_attributes[version];
    return Object.keys(attributes).map((key) => `${key}="${attributes[key]}"`).join(" ");
}