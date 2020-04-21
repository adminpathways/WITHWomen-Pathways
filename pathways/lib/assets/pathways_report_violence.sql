CREATE VIEW `pathways_report_violence` AS
SELECT `pathways_answers`.`response_id`,
  `pathways_answers`.`question_id`,
  `pathways_questions`.`TEXT` AS `question`,
  `pathways_answers`.`TEXT` AS `answer`,
  `pathways_answers`.`score`,
  (SELECT SUM(`o`.`score`)
   FROM `pathways_answers` AS o
   WHERE `o`.`response_id` = `pathways_answers`.`response_id`
     AND `o`.`id` <= `pathways_answers`.`id`) AS `running score`,
  CONVERT_TZ(`pathways_answers`.`created_at`, 'UTC', 'America/Toronto') AS `answered_at`,
  GROUP_CONCAT(`pathways_concerns`.`category`, ':', `pathways_concerns`.`score`) as `concerns`
FROM `pathways_answers`
  INNER JOIN `pathways_responses` ON (`pathways_answers`.`response_id` = `pathways_responses`.`id`)
  INNER JOIN `pathways_questions` ON (`pathways_answers`.`question_id` = `pathways_questions`.`id`)
  INNER JOIN `pathways_concerns` ON (`pathways_concerns`.`response_id` = `pathways_responses`.`id`)
GROUP BY `pathways_responses`.`id`, `pathways_answers`.`id`
ORDER BY `pathways_responses`.`id`, `pathways_answers`.`id`