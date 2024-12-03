export function badges() {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <badges>
  </badges>`;
}

export function completion() {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <course_completion>
  </course_completion>`;
}

export function files() {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <files>
  </files>`;
}

export function gradeHistory() {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <grade_history>
    <grade_grades>
      <grade_grade id="14">
        <action>1</action>
        <oldid>7</oldid>
        <source>system</source>
        <loggeduser>2</loggeduser>
        <itemid>81</itemid>
        <userid>2</userid>
        <rawgrade>$@NULL@$</rawgrade>
        <rawgrademax>100.00000</rawgrademax>
        <rawgrademin>0.00000</rawgrademin>
        <rawscaleid>$@NULL@$</rawscaleid>
        <usermodified>$@NULL@$</usermodified>
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

export function gradebook() {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <gradebook>
    <attributes>
    </attributes>
    <grade_categories>
      <grade_category id="31">
        <parent>$@NULL@$</parent>
        <depth>1</depth>
        <path>/31/</path>
        <fullname>?</fullname>
        <aggregation>13</aggregation>
        <keephigh>0</keephigh>
        <droplow>0</droplow>
        <aggregateonlygraded>1</aggregateonlygraded>
        <aggregateoutcomes>0</aggregateoutcomes>
        <timecreated>1732517408</timecreated>
        <timemodified>1732517408</timemodified>
        <hidden>0</hidden>
      </grade_category>
    </grade_categories>
    <grade_items>
      <grade_item id="81">
        <categoryid>$@NULL@$</categoryid>
        <itemname>$@NULL@$</itemname>
        <itemtype>course</itemtype>
        <itemmodule>$@NULL@$</itemmodule>
        <iteminstance>31</iteminstance>
        <itemnumber>$@NULL@$</itemnumber>
        <iteminfo>$@NULL@$</iteminfo>
        <idnumber>$@NULL@$</idnumber>
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
        <aggregationcoef2>0.00000</aggregationcoef2>
        <weightoverride>0</weightoverride>
        <sortorder>1</sortorder>
        <display>0</display>
        <decimals>$@NULL@$</decimals>
        <hidden>0</hidden>
        <locked>0</locked>
        <locktime>0</locktime>
        <needsupdate>0</needsupdate>
        <timecreated>1732517408</timecreated>
        <timemodified>1732517432</timemodified>
        <grade_grades>
          <grade_grade id="7">
            <userid>2</userid>
            <rawgrade>$@NULL@$</rawgrade>
            <rawgrademax>100.00000</rawgrademax>
            <rawgrademin>0.00000</rawgrademin>
            <rawscaleid>$@NULL@$</rawscaleid>
            <usermodified>$@NULL@$</usermodified>
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
            <aggregationstatus>unknown</aggregationstatus>
            <aggregationweight>$@NULL@$</aggregationweight>
          </grade_grade>
        </grade_grades>
      </grade_item>
    </grade_items>
    <grade_letters>
    </grade_letters>
    <grade_settings>
      <grade_setting id="">
        <name>minmaxtouse</name>
        <value>1</value>
      </grade_setting>
    </grade_settings>
  </gradebook>`;
}

export function groups() {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <groups>
    <groupcustomfields>
    </groupcustomfields>
    <groupings>
      <groupingcustomfields>
      </groupingcustomfields>
    </groupings>
  </groups>`;
}

export function outcomes() {
  return `\
  <?xml version="1.0" encoding="UTF-8"?>
  <outcomes_definition>
  </outcomes_definition>`;
}

export function roles() {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <roles_definition>
  </roles_definition>`;
}

export function scales() {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <scales_definition>
  </scales_definition>`;
}

export function user() {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<users>
  <user id="999" contextid="999">
    <username></username>
    <idnumber></idnumber>
    <email></email>
    <phone1></phone1>
    <phone2></phone2>
    <institution></institution>
    <department></department>
    <address></address>
    <city></city>
    <country></country>
    <lastip></lastip>
    <picture></picture>
    <description></description>
    <descriptionformat></descriptionformat>
    <imagealt></imagealt>
    <auth></auth>
    <firstnamephonetic></firstnamephonetic>
    <lastnamephonetic></lastnamephonetic>
    <middlename></middlename>
    <alternatename></alternatename>
    <firstname></firstname>
    <lastname></lastname>
    <confirmed></confirmed>
    <policyagreed></policyagreed>
    <deleted></deleted>
    <lang></lang>
    <theme></theme>
    <timezone></timezone>
    <firstaccess></firstaccess>
    <lastaccess></lastaccess>
    <lastlogin></lastlogin>
    <currentlogin></currentlogin>
    <mailformat></mailformat>
    <maildigest></maildigest>
    <maildisplay></maildisplay>
    <autosubscribe></autosubscribe>
    <trackforums></trackforums>
    <timecreated></timecreated>
    <timemodified></timemodified>
    <trustbitmask></trustbitmask>
    <custom_fields>
    </custom_fields>
    <tags>
    </tags>
    <preferences>
    </preferences>
    <roles>
      <role_overrides>
      </role_overrides>
      <role_assignments>
      </role_assignments>
    </roles>
  </user>
</users>`;
}
