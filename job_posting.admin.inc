<?php

function job_posting_admin_settings($form, &$form_state) {
    $form['job_posting_url'] = array(
        '#type' => 'textfield',
        '#title' => t('Job Posting URL'),
        '#default_value' => variable_get('job_posting_url', ""),
        '#required' => TRUE,
        '#description' => 'Job Posting json url',
    );
    return system_settings_form($form);
}
