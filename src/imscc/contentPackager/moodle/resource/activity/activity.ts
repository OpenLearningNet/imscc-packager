export function calendar() {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <events>
    </events>`;
}

export function comments() {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <comments>
    </comments>`;
}

export function competencies() {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <course_module_competencies>s
        <competencies>
        </competencies>
    </course_module_competencies>`;
}

export function completion() {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <completions>
        <completionviews>
        </completionviews>
    </completions>`;
}

export function filters() {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <filters>
        <filter_actives>
        </filter_actives>
        <filter_configs>
        </filter_configs>
    </filters>`;
}

export function gradeHistory() {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <grade_history>
        <grade_grades>
            <grade_grade id="13">
                <action>1</action>
                <oldid>6</oldid>
                <source>mod/quiz</source>
                <loggeduser>2</loggeduser>
                <itemid>82</itemid>
                <userid>2</userid>
                <rawgrade>$@NULL@$</rawgrade>
                <rawgrademax>10.00000</rawgrademax>
                <rawgrademin>0.00000</rawgrademin>
                <rawscaleid>$@NULL@$</rawscaleid>
                <usermodified>2</usermodified>
                <finalgrade>$@NULL@$</finalgrade>
                <hidden>0</hidden>
                <locked>0</locked>
                <locktime>0</locktime>
                <exported>0</exported>
                <overridden>0</overridden>
                <excluded>0</excluded>
                <feedback>$@NULL@$</feedback>
                <feedbackformat>2</feedbackformat>
                <information>$@NULL@$</information>
                <informationformat>2</informationformat>
                <timemodified>1732517433</timemodified>
            </grade_grade>
        </grade_grades>
    </grade_history>`;
}

export function activityGradebook() {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<activity_gradebook>
  <grade_items>
    <grade_item id="82">
      <categoryid>31</categoryid>
      <itemname>Section Content Title for Quiz</itemname>
      <itemtype>mod</itemtype>
      <itemmodule>quiz</itemmodule>
      <iteminstance>11</iteminstance>
      <itemnumber>0</itemnumber>
      <iteminfo>$@NULL@$</iteminfo>
      <idnumber></idnumber>
      <calculation>$@NULL@$</calculation>
      <gradetype>1</gradetype>
      <grademax>10.00000</grademax>
      <grademin>0.00000</grademin>
      <scaleid>$@NULL@$</scaleid>
      <outcomeid>$@NULL@$</outcomeid>
      <gradepass>0.00000</gradepass>
      <multfactor>1.00000</multfactor>
      <plusfactor>0.00000</plusfactor>
      <aggregationcoef>0.00000</aggregationcoef>
      <aggregationcoef2>1.00000</aggregationcoef2>
      <weightoverride>0</weightoverride>
      <sortorder>2</sortorder>
      <display>0</display>
      <decimals>$@NULL@$</decimals>
      <hidden>0</hidden>
      <locked>0</locked>
      <locktime>0</locktime>
      <needsupdate>0</needsupdate>
      <timecreated>1732517432</timecreated>
      <timemodified>1732762707</timemodified>
      <grade_grades>
        <grade_grade id="6">
          <userid>2</userid>
          <rawgrade>$@NULL@$</rawgrade>
          <rawgrademax>10.00000</rawgrademax>
          <rawgrademin>0.00000</rawgrademin>
          <rawscaleid>$@NULL@$</rawscaleid>
          <usermodified>2</usermodified>
          <finalgrade>$@NULL@$</finalgrade>
          <hidden>0</hidden>
          <locked>0</locked>
          <locktime>0</locktime>
          <exported>0</exported>
          <overridden>0</overridden>
          <excluded>0</excluded>
          <feedback>$@NULL@$</feedback>
          <feedbackformat>2</feedbackformat>
          <information>$@NULL@$</information>
          <informationformat>2</informationformat>
          <timecreated>$@NULL@$</timecreated>
          <timemodified>$@NULL@$</timemodified>
          <aggregationstatus>novalue</aggregationstatus>
          <aggregationweight>0.00000</aggregationweight>
        </grade_grade>
      </grade_grades>
    </grade_item>
  </grade_items>
  <grade_letters>
  </grade_letters>
</activity_gradebook>`;
}

export function inforef() {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<inforef>
  <userref>
    <user>
      <id>2</id>
    </user>
  </userref>
  <grade_itemref>
    <grade_item>
      <id>82</id>
    </grade_item>
  </grade_itemref>
  <question_categoryref>
    <question_category>
      <id>43</id>
    </question_category>
    <question_category>
      <id>44</id>
    </question_category>
    <question_category>
      <id>45</id>
    </question_category>
    <question_category>
      <id>46</id>
    </question_category>
  </question_categoryref>
</inforef>`;
}

export function logs() {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<logs>
</logs>`;
}

export function logstore() {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<logstores>
  <logstore>
    <subplugin_logstore_database_logstore>
    </subplugin_logstore_database_logstore>
    <subplugin_logstore_standard_logstore>
      <logstore_standard_log id="3965">
        <eventname>\mod_quiz\event\course_module_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>course_module</target>
        <objecttable>quiz</objecttable>
        <objectid>11</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>Tjs=</other>
        <timecreated>1732762672</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3967">
        <eventname>\core\event\course_module_updated</eventname>
        <component>core</component>
        <action>updated</action>
        <target>course_module</target>
        <objecttable>course_modules</objecttable>
        <objectid>436</objectid>
        <crud>u</crud>
        <edulevel>1</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>YTozOntzOjEwOiJtb2R1bGVuYW1lIjtzOjQ6InF1aXoiO3M6MTA6Imluc3RhbmNlaWQiO3M6MjoiMTEiO3M6NDoibmFtZSI7czozMDoiU2VjdGlvbiBDb250ZW50IFRpdGxlIGZvciBRdWl6Ijt9</other>
        <timecreated>1732762707</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3914">
        <eventname>\core\event\course_module_created</eventname>
        <component>core</component>
        <action>created</action>
        <target>course_module</target>
        <objecttable>course_modules</objecttable>
        <objectid>436</objectid>
        <crud>c</crud>
        <edulevel>1</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>YTozOntzOjEwOiJtb2R1bGVuYW1lIjtzOjQ6InF1aXoiO3M6MTA6Imluc3RhbmNlaWQiO2k6MTE7czo0OiJuYW1lIjtzOjE3OiJKdWR1bCBRdWl6IFNlY3RpbyI7fQ==</other>
        <timecreated>1732517432</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3917">
        <eventname>\mod_quiz\event\course_module_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>course_module</target>
        <objecttable>quiz</objecttable>
        <objectid>11</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>Tjs=</other>
        <timecreated>1732517433</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3918">
        <eventname>\mod_quiz\event\edit_page_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>edit_page</target>
        <objecttable>$@NULL@$</objecttable>
        <objectid>$@NULL@$</objectid>
        <crud>r</crud>
        <edulevel>1</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>YToxOntzOjY6InF1aXppZCI7czoyOiIxMSI7fQ==</other>
        <timecreated>1732517441</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3920">
        <eventname>\mod_quiz\event\slot_created</eventname>
        <component>mod_quiz</component>
        <action>created</action>
        <target>slot</target>
        <objecttable>quiz_slots</objecttable>
        <objectid>38</objectid>
        <crud>c</crud>
        <edulevel>1</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>YTozOntzOjY6InF1aXppZCI7czoyOiIxMSI7czoxMDoic2xvdG51bWJlciI7aToxO3M6NDoicGFnZSI7aToxO30=</other>
        <timecreated>1732517604</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3921">
        <eventname>\mod_quiz\event\edit_page_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>edit_page</target>
        <objecttable>$@NULL@$</objecttable>
        <objectid>$@NULL@$</objectid>
        <crud>r</crud>
        <edulevel>1</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>YToxOntzOjY6InF1aXppZCI7czoyOiIxMSI7fQ==</other>
        <timecreated>1732517604</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3922">
        <eventname>\mod_quiz\event\edit_page_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>edit_page</target>
        <objecttable>$@NULL@$</objecttable>
        <objectid>$@NULL@$</objectid>
        <crud>r</crud>
        <edulevel>1</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>YToxOntzOjY6InF1aXppZCI7czoyOiIxMSI7fQ==</other>
        <timecreated>1732517716</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3926">
        <eventname>\mod_quiz\event\course_module_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>course_module</target>
        <objecttable>quiz</objecttable>
        <objectid>11</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>Tjs=</other>
        <timecreated>1732517732</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3927">
        <eventname>\mod_quiz\event\attempt_preview_started</eventname>
        <component>mod_quiz</component>
        <action>started</action>
        <target>attempt_preview</target>
        <objecttable>quiz_attempts</objecttable>
        <objectid>9</objectid>
        <crud>c</crud>
        <edulevel>1</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>2</relateduserid>
        <anonymous>0</anonymous>
        <other>YToxOntzOjY6InF1aXppZCI7czoyOiIxMSI7fQ==</other>
        <timecreated>1732517735</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3928">
        <eventname>\mod_quiz\event\attempt_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>attempt</target>
        <objecttable>quiz_attempts</objecttable>
        <objectid>9</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>2</relateduserid>
        <anonymous>0</anonymous>
        <other>YToyOntzOjY6InF1aXppZCI7czoyOiIxMSI7czo0OiJwYWdlIjtzOjE6IjAiO30=</other>
        <timecreated>1732517736</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3929">
        <eventname>\mod_quiz\event\attempt_updated</eventname>
        <component>mod_quiz</component>
        <action>updated</action>
        <target>attempt</target>
        <objecttable>quiz_attempts</objecttable>
        <objectid>9</objectid>
        <crud>u</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>2</relateduserid>
        <anonymous>0</anonymous>
        <other>YToyOntzOjY6InF1aXppZCI7czoyOiIxMSI7czo0OiJwYWdlIjtzOjE6IjAiO30=</other>
        <timecreated>1732517740</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3930">
        <eventname>\mod_quiz\event\attempt_summary_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>attempt_summary</target>
        <objecttable>quiz_attempts</objecttable>
        <objectid>9</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>2</relateduserid>
        <anonymous>0</anonymous>
        <other>YToxOntzOjY6InF1aXppZCI7czoyOiIxMSI7fQ==</other>
        <timecreated>1732517741</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3931">
        <eventname>\mod_quiz\event\attempt_reviewed</eventname>
        <component>mod_quiz</component>
        <action>reviewed</action>
        <target>attempt</target>
        <objecttable>quiz_attempts</objecttable>
        <objectid>9</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>2</relateduserid>
        <anonymous>0</anonymous>
        <other>YToxOntzOjY6InF1aXppZCI7czoyOiIxMSI7fQ==</other>
        <timecreated>1732517747</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3932">
        <eventname>\mod_quiz\event\course_module_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>course_module</target>
        <objecttable>quiz</objecttable>
        <objectid>11</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>Tjs=</other>
        <timecreated>1732517765</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3934">
        <eventname>\mod_quiz\event\course_module_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>course_module</target>
        <objecttable>quiz</objecttable>
        <objectid>11</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>Tjs=</other>
        <timecreated>1732527894</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3935">
        <eventname>\mod_quiz\event\course_module_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>course_module</target>
        <objecttable>quiz</objecttable>
        <objectid>11</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>Tjs=</other>
        <timecreated>1732527899</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3937">
        <eventname>\core\event\course_module_updated</eventname>
        <component>core</component>
        <action>updated</action>
        <target>course_module</target>
        <objecttable>course_modules</objecttable>
        <objectid>436</objectid>
        <crud>u</crud>
        <edulevel>1</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>YTozOntzOjEwOiJtb2R1bGVuYW1lIjtzOjQ6InF1aXoiO3M6MTA6Imluc3RhbmNlaWQiO3M6MjoiMTEiO3M6NDoibmFtZSI7czoxODoiSnVkdWwgUXVpeiBTZWN0aW9uIjt9</other>
        <timecreated>1732527910</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3941">
        <eventname>\core\event\course_module_updated</eventname>
        <component>core</component>
        <action>updated</action>
        <target>course_module</target>
        <objecttable>course_modules</objecttable>
        <objectid>436</objectid>
        <crud>u</crud>
        <edulevel>1</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>YTozOntzOjEwOiJtb2R1bGVuYW1lIjtzOjQ6InF1aXoiO3M6MTA6Imluc3RhbmNlaWQiO3M6MjoiMTEiO3M6NDoibmFtZSI7czoyMToiU2VjdGlvbiBDb250ZW50IFRpdGxlIjt9</other>
        <timecreated>1732529609</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3943">
        <eventname>\mod_quiz\event\course_module_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>course_module</target>
        <objecttable>quiz</objecttable>
        <objectid>11</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>Tjs=</other>
        <timecreated>1732529613</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3944">
        <eventname>\mod_quiz\event\attempt_preview_started</eventname>
        <component>mod_quiz</component>
        <action>started</action>
        <target>attempt_preview</target>
        <objecttable>quiz_attempts</objecttable>
        <objectid>10</objectid>
        <crud>c</crud>
        <edulevel>1</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>2</relateduserid>
        <anonymous>0</anonymous>
        <other>YToxOntzOjY6InF1aXppZCI7czoyOiIxMSI7fQ==</other>
        <timecreated>1732529739</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3945">
        <eventname>\mod_quiz\event\attempt_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>attempt</target>
        <objecttable>quiz_attempts</objecttable>
        <objectid>10</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>2</relateduserid>
        <anonymous>0</anonymous>
        <other>YToyOntzOjY6InF1aXppZCI7czoyOiIxMSI7czo0OiJwYWdlIjtzOjE6IjAiO30=</other>
        <timecreated>1732529739</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3955">
        <eventname>\mod_quiz\event\course_module_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>course_module</target>
        <objecttable>quiz</objecttable>
        <objectid>11</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>Tjs=</other>
        <timecreated>1732761872</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
      <logstore_standard_log id="3969">
        <eventname>\mod_quiz\event\course_module_viewed</eventname>
        <component>mod_quiz</component>
        <action>viewed</action>
        <target>course_module</target>
        <objecttable>quiz</objecttable>
        <objectid>11</objectid>
        <crud>r</crud>
        <edulevel>2</edulevel>
        <contextid>605</contextid>
        <userid>2</userid>
        <relateduserid>$@NULL@$</relateduserid>
        <anonymous>0</anonymous>
        <other>Tjs=</other>
        <timecreated>1732762710</timecreated>
        <ip>103.154.138.4</ip>
        <realuserid>$@NULL@$</realuserid>
      </logstore_standard_log>
    </subplugin_logstore_standard_logstore>
  </logstore>
</logstores>`;
}

export function module() {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<module id="436" version="2024100700">
  <modulename>quiz</modulename>
  <sectionid>222</sectionid>
  <sectionnumber>1</sectionnumber>
  <idnumber></idnumber>
  <added>1732517432</added>
  <score>0</score>
  <indent>0</indent>
  <visible>1</visible>
  <visibleoncoursepage>1</visibleoncoursepage>
  <visibleold>1</visibleold>
  <groupmode>0</groupmode>
  <groupingid>0</groupingid>
  <completion>0</completion>
  <completiongradeitemnumber>$@NULL@$</completiongradeitemnumber>
  <completionpassgrade>0</completionpassgrade>
  <completionview>0</completionview>
  <completionexpected>0</completionexpected>
  <availability>$@NULL@$</availability>
  <showdescription>0</showdescription>
  <downloadcontent>1</downloadcontent>
  <lang></lang>
  <tags>
  </tags>
</module>`;
}

export function roles() {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<roles>
  <role_overrides>
  </role_overrides>
  <role_assignments>
  </role_assignments>
</roles>`;
}

export function xapistate() {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<states>
</states>`;
}
