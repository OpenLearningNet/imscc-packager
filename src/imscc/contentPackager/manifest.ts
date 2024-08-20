import { randomId } from "../common";

export const manifestTemplate = ({
  manifestId,
  title,
  date,
  quizId,
  assessmentMetaId,
}: {
  manifestId: string;
  title: string;
  date: string;
  quizId: string;
  assessmentMetaId: string;
}) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="${manifestId}" xmlns="http://www.imsglobal.org/xsd/imsccv1p1/imscp_v1p1" xmlns:lom="http://ltsc.ieee.org/xsd/imsccv1p1/LOM/resource" xmlns:imsmd="http://www.imsglobal.org/xsd/imsmd_v1p2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsccv1p1/imscp_v1p1 http://www.imsglobal.org/xsd/imscp_v1p1.xsd http://ltsc.ieee.org/xsd/imsccv1p1/LOM/resource http://www.imsglobal.org/profile/cc/ccv1p1/LOM/ccv1p1_lomresource_v1p0.xsd http://www.imsglobal.org/xsd/imsmd_v1p2 http://www.imsglobal.org/xsd/imsmd_v1p2p2.xsd">
  <metadata>
    <schema>IMS Content</schema>
    <schemaversion>1.1.3</schemaversion>
    <imsmd:lom>
      <imsmd:general>
        <imsmd:title>
          <imsmd:string>QTI Quiz Export for course "${title}"</imsmd:string>
        </imsmd:title>
      </imsmd:general>
      <imsmd:lifeCycle>
				<imsmd:contribute>
					<imsmd:date>
						<imsmd:dateTime>${date}</imsmd:dateTime>
					</imsmd:date>
				</imsmd:contribute>
			</imsmd:lifeCycle>
			<imsmd:rights>
				<imsmd:copyrightAndOtherRestrictions>
					<imsmd:value>yes</imsmd:value>
				</imsmd:copyrightAndOtherRestrictions>
				<imsmd:description>
					<imsmd:string>Private (Copyrighted) - http://en.wikipedia.org/wiki/Copyright</imsmd:string>
				</imsmd:description>
			</imsmd:rights>
    </imsmd:lom>
  </metadata>
  <organizations/>
  <resources>
    <resource identifier="${quizId}" type="imsqti_xmlv1p2">
      <file href="${quizId}/${quizId}.xml"/>
      <dependency identifierref="${assessmentMetaId}"/>
    </resource>
    <resource identifier="${assessmentMetaId}" type="associatedcontent/imscc_xmlv1p1/learning-application-resource" href="${quizId}/assessment_meta.xml">
      <file href="${quizId}/assessment_meta.xml"/>
    </resource>
  </resources>
</manifest>
`;
};

export const manifestXml = ({
  quizId,
  title,
}: {
  quizId: string;
  title: string;
}) => {
  const assessmentMetaId = randomId("ASSESSMENT_META");
  const manifestId = randomId("MANIFEST");
  const date = new Date().toISOString().split("T")[0];
  return manifestTemplate({
    manifestId: manifestId,
    title: title,
    date: date,
    quizId: quizId,
    assessmentMetaId: assessmentMetaId,
  });
};
