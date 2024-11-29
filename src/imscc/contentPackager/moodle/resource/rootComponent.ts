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
    <user id="2" contextid="5">
      <username>admin</username>
      <idnumber></idnumber>
      <email>dev@openlearning.com</email>
      <phone1></phone1>
      <phone2></phone2>
      <institution></institution>
      <department></department>
      <address></address>
      <city></city>
      <country>AU</country>
      <lastip>103.154.138.4</lastip>
      <picture>0</picture>
      <description></description>
      <descriptionformat>1</descriptionformat>
      <imagealt></imagealt>
      <auth>moodlecloud</auth>
      <firstnamephonetic></firstnamephonetic>
      <lastnamephonetic></lastnamephonetic>
      <middlename></middlename>
      <alternatename></alternatename>
      <firstname>OpenLearning</firstname>
      <lastname>Developers</lastname>
      <confirmed>1</confirmed>
      <policyagreed>0</policyagreed>
      <deleted>0</deleted>
      <lang>en</lang>
      <theme></theme>
      <timezone>Australia/Sydney</timezone>
      <firstaccess>1715054959</firstaccess>
      <lastaccess>1732762716</lastaccess>
      <lastlogin>1732527118</lastlogin>
      <currentlogin>1732761777</currentlogin>
      <mailformat>1</mailformat>
      <maildigest>0</maildigest>
      <maildisplay>0</maildisplay>
      <autosubscribe>1</autosubscribe>
      <trackforums>0</trackforums>
      <timecreated>0</timecreated>
      <timemodified>1715054959</timemodified>
      <trustbitmask>0</trustbitmask>
      <custom_fields>
      </custom_fields>
      <tags>
      </tags>
      <preferences>
        <preference id="4">
          <name>user_home_page_preference</name>
          <value>0</value>
        </preference>
        <preference id="5">
          <name>userselector_preserveselected</name>
          <value>0</value>
        </preference>
        <preference id="6">
          <name>userselector_autoselectunique</name>
          <value>0</value>
        </preference>
        <preference id="11">
          <name>filepicker_recentlicense</name>
          <value>allrightsreserved</value>
        </preference>
        <preference id="12">
          <name>switchdevicetablet</name>
          <value>default</value>
        </preference>
        <preference id="14">
          <name>docked_block_instance_4</name>
          <value>0</value>
        </preference>
        <preference id="13">
          <name>docked_block_instance_5</name>
          <value>0</value>
        </preference>
        <preference id="16">
          <name>docked_block_instance_6</name>
          <value>0</value>
        </preference>
        <preference id="20">
          <name>core_message_migrate_data</name>
          <value>1</value>
        </preference>
        <preference id="32">
          <name>core_user_welcome</name>
          <value>1655704018</value>
        </preference>
        <preference id="37">
          <name>core_userfeedback_remind</name>
          <value>2000000002</value>
        </preference>
        <preference id="42">
          <name>reportbuilder-report-1-0</name>
          <value>{"config_change:setting_operator":3,"config_change:setting_value":"downloadallsitecerts"}</value>
        </preference>
        <preference id="8">
          <name>email_bounce_count</name>
          <value>0</value>
        </preference>
        <preference id="10">
          <name>filepicker_recentrepository</name>
          <value>4</value>
        </preference>
        <preference id="75">
          <name>ifirst</name>
          <value></value>
        </preference>
        <preference id="76">
          <name>ilast</name>
          <value></value>
        </preference>
        <preference id="86">
          <name>coursesectionspreferences_32</name>
          <value>{"contentcollapsed":[]}</value>
        </preference>
        <preference id="87">
          <name>block_myoverview_user_view_preference</name>
          <value>list</value>
        </preference>
        <preference id="90">
          <name>coursesectionspreferences_36</name>
          <value>{"contentcollapsed":[]}</value>
        </preference>
        <preference id="43">
          <name>coursesectionspreferences_9</name>
          <value>{"contentcollapsed":[36],"indexcollapsed":[]}</value>
        </preference>
        <preference id="84">
          <name>coursesectionspreferences_16</name>
          <value>{"contentcollapsed":{"2":59,"3":57}}</value>
        </preference>
        <preference id="46">
          <name>qtype_multichoice_single</name>
          <value>1</value>
        </preference>
        <preference id="44">
          <name>qtype_multichoice_defaultmark</name>
          <value>1</value>
        </preference>
        <preference id="45">
          <name>qtype_multichoice_penalty</name>
          <value>0.3333333</value>
        </preference>
        <preference id="47">
          <name>qtype_multichoice_shuffleanswers</name>
          <value>1</value>
        </preference>
        <preference id="49">
          <name>qtype_multichoice_showstandardinstruction</name>
          <value>0</value>
        </preference>
        <preference id="48">
          <name>qtype_multichoice_answernumbering</name>
          <value>ABCD</value>
        </preference>
        <preference id="79">
          <name>tool_usertours_tour_completion_time_14</name>
          <value>1720148086</value>
        </preference>
        <preference id="77">
          <name>coursesectionspreferences_10</name>
          <value>{"contentcollapsed":[],"indexcollapsed":[]}</value>
        </preference>
        <preference id="80">
          <name>coursesectionspreferences_15</name>
          <value>{"contentcollapsed":[],"indexcollapsed":[]}</value>
        </preference>
        <preference id="50">
          <name>qtype_truefalse_defaultmark</name>
          <value>1</value>
        </preference>
        <preference id="51">
          <name>qtype_truefalse_penalty</name>
          <value>1</value>
        </preference>
        <preference id="52">
          <name>qtype_truefalse_showstandardinstruction</name>
          <value>0</value>
        </preference>
        <preference id="53">
          <name>qtype_match_defaultmark</name>
          <value>1</value>
        </preference>
        <preference id="54">
          <name>qtype_match_penalty</name>
          <value>0.3333333</value>
        </preference>
        <preference id="55">
          <name>qtype_match_shuffleanswers</name>
          <value>1</value>
        </preference>
        <preference id="56">
          <name>qtype_shortanswer_defaultmark</name>
          <value>1</value>
        </preference>
        <preference id="57">
          <name>qtype_shortanswer_penalty</name>
          <value>0.3333333</value>
        </preference>
        <preference id="58">
          <name>qtype_shortanswer_usecase</name>
          <value>0</value>
        </preference>
        <preference id="59">
          <name>qtype_numerical_defaultmark</name>
          <value>1</value>
        </preference>
        <preference id="60">
          <name>qtype_numerical_penalty</name>
          <value>0.3333333</value>
        </preference>
        <preference id="61">
          <name>qtype_numerical_unitrole</name>
          <value>3</value>
        </preference>
        <preference id="62">
          <name>qtype_numerical_unitpenalty</name>
          <value>0.1</value>
        </preference>
        <preference id="63">
          <name>qtype_numerical_unitgradingtypes</name>
          <value>1</value>
        </preference>
        <preference id="64">
          <name>qtype_numerical_multichoicedisplay</name>
          <value>0</value>
        </preference>
        <preference id="65">
          <name>qtype_numerical_unitsleft</name>
          <value>0</value>
        </preference>
        <preference id="82">
          <name>block_myoverview_user_grouping_preference</name>
          <value>all</value>
        </preference>
        <preference id="66">
          <name>qtype_essay_defaultmark</name>
          <value>1</value>
        </preference>
        <preference id="67">
          <name>qtype_essay_responseformat</name>
          <value>editor</value>
        </preference>
        <preference id="68">
          <name>qtype_essay_responserequired</name>
          <value>1</value>
        </preference>
        <preference id="69">
          <name>qtype_essay_responsefieldlines</name>
          <value>10</value>
        </preference>
        <preference id="70">
          <name>qtype_essay_attachments</name>
          <value>0</value>
        </preference>
        <preference id="71">
          <name>qtype_essay_attachmentsrequired</name>
          <value>0</value>
        </preference>
        <preference id="72">
          <name>qtype_essay_maxbytes</name>
          <value>0</value>
        </preference>
        <preference id="73">
          <name>qtype_multianswer_penalty</name>
          <value>0.3333333</value>
        </preference>
        <preference id="74">
          <name>question_bank_qperpage</name>
          <value>100</value>
        </preference>
        <preference id="78">
          <name>coursesectionspreferences_14</name>
          <value>{"contentcollapsed":[]}</value>
        </preference>
        <preference id="88">
          <name>coursesectionspreferences_34</name>
          <value>{"contentcollapsed":[158]}</value>
        </preference>
        <preference id="85">
          <name>coursesectionspreferences_26</name>
          <value>{"contentcollapsed":[]}</value>
        </preference>
        <preference id="83">
          <name>coursesectionspreferences_23</name>
          <value>{"indexcollapsed":[]}</value>
        </preference>
        <preference id="2">
          <name>login_failed_count_since_success</name>
          <value>0</value>
        </preference>
        <preference id="9">
          <name>email_send_count</name>
          <value>30</value>
        </preference>
        <preference id="41">
          <name>filemanager_recentviewmode</name>
          <value>2</value>
        </preference>
        <preference id="40">
          <name>drawer-open-block</name>
          <value>0</value>
        </preference>
        <preference id="35">
          <name>drawer-open-index</name>
          <value>1</value>
        </preference>
        <preference id="89">
          <name>coursesectionspreferences_33</name>
          <value>{"indexcollapsed":[212]}</value>
        </preference>
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
