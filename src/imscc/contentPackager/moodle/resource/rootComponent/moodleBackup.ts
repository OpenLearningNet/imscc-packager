import { strippedUuid } from "../../../../common";

export function moodleBackup({
  backUpName,
  quizActivityFolderName,
  moduleId,
  sectionId,
  activitTitle,
}: {
  backUpName: string;
  quizActivityFolderName: string;
  moduleId: string;
  sectionId: string;
  activitTitle: string;
}) {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <moodle_backup>
        <information>
            <name>${backUpName}.mbz</name>
            <moodle_version>2024100700</moodle_version>
            <moodle_release>4.5 (Build: 20241007)</moodle_release>
            <backup_version>2024100700</backup_version>
            <backup_release>4.5</backup_release>
            <backup_date>${Math.floor(Date.now() / 1000)}</backup_date>
            <mnet_remoteusers>0</mnet_remoteusers>
            <include_files>1</include_files>
            <include_file_references_to_external_content>0</include_file_references_to_external_content>
            <original_wwwroot>https://openlearning.moodlecloud.com</original_wwwroot>
            <original_site_identifier_hash>5dd3a01ea044079402084df8461aabd6</original_site_identifier_hash>
            <original_course_id>36</original_course_id>
            <original_course_format>topics</original_course_format>
            <original_course_fullname>Coursemagic Quiz Import</original_course_fullname>
            <original_course_shortname>CQI</original_course_shortname>
            <original_course_startdate>1732539600</original_course_startdate>
            <original_course_enddate>1764075600</original_course_enddate>
            <original_course_contextid>603</original_course_contextid>
            <original_system_contextid>1</original_system_contextid>
            <details>
            <detail backup_id="${strippedUuid()}">
                <type>activity</type>
                <format>moodle2</format>
                <interactive>1</interactive>
                <mode>10</mode>
                <execution>1</execution>
                <executiontime>0</executiontime>
            </detail>
            </details>
            <contents>
            <activities>
                <activity>
                <moduleid>${moduleId}</moduleid>
                <sectionid>${sectionId}</sectionid>
                <modulename>quiz</modulename>
                <title>${activitTitle}</title>
                <directory>activities/quiz_${moduleId}</directory>
                <insubsection></insubsection>
                </activity>
            </activities>
            </contents>
            <settings>
            <setting>
                <level>root</level>
                <name>filename</name>
                <value>${activitTitle}.mbz</value>
            </setting>
            <setting>
                <level>root</level>
                <name>users</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>anonymize</name>
                <value>0</value>
            </setting>
            <setting>
                <level>root</level>
                <name>role_assignments</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>activities</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>blocks</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>files</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>filters</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>comments</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>badges</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>calendarevents</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>userscompletion</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>logs</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>grade_histories</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>questionbank</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>groups</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>competencies</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>customfield</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>contentbankcontent</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>xapistate</name>
                <value>1</value>
            </setting>
            <setting>
                <level>root</level>
                <name>legacyfiles</name>
                <value>1</value>
            </setting>
            <setting>
                <level>activity</level>
                <activity>${quizActivityFolderName}</activity>
                <name>${quizActivityFolderName + "_included"}</name>
                <value>1</value>
            </setting>
            <setting>
                <level>activity</level>
                <activity>${quizActivityFolderName}</activity>
                <name>${quizActivityFolderName + "_userinfo"}</name>
                <value>1</value>
            </setting>
            </settings>
        </information>
    </moodle_backup>`;
}
