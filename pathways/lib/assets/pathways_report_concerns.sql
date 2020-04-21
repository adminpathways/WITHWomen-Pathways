CREATE VIEW `pathways_report_concerns` AS
SELECT `pathways_concerns`.`response_id`,
  `pathways_concerns`.`category`,
  `pathways_concerns`.`score`,
  CONVERT_TZ(`pathways_concerns`.`created_at`, 'UTC', 'America/Toronto') AS `recorded_at`
FROM `pathways_concerns`
  INNER JOIN `pathways_responses` ON (`pathways_concerns`.`response_id` = `pathways_responses`.`id`)
ORDER BY `pathways_responses`.`id`, `pathways_concerns`.`category`