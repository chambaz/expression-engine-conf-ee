<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['is_system_on'] = 'y';
$config['multiple_sites_enabled'] = 'n';
// ExpressionEngine Config Items
// Find more configs and overrides at
// https://docs.expressionengine.com/latest/general/system_configuration_overrides.html

$config['app_version'] = '3.5.11';
$config['encryption_key'] = '75d1b3f1210028dff8480ba181da43e6341c3da3';
$config['session_crypt_key'] = '85df422687a3941b341f109163b1645aa7549b20';
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => 'localhost',
		'database' => 'componentdesign',
		'username' => 'root',
		'password' => 'root',
		'dbprefix' => 'exp_',
		'port'     => ''
	),
);

// EOF