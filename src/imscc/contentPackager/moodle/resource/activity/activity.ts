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
        </grade_grades>
    </grade_history>`;
}

export function activityGradebook() {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<activity_gradebook>
  <grade_items>
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
  </logstore>
</logstores>`;
}

export function module({
  moduleId,
  sectionId,
}: {
  moduleId: string;
  sectionId: string;
}) {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<module id="${moduleId}" version="2024100700">
  <modulename>quiz</modulename>
  <sectionid>${sectionId}</sectionid>
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
