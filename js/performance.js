var storageArrayButton = document.getElementById('menu_storage_array');
storageArrayButton.addEventListener('click', showStorageArrayMenu, false);

var storageButton= document.getElementById('menu_storage');
storageButton.addEventListener('click', showStorageMenu, false);

var copyServicesButton = document.getElementById('menu_copy_services');
copyServicesButton.addEventListener('click', showCopyServicesMenu, false);

var hostMappingButton = document.getElementById('menu_host_mapping');
hostMappingButton.addEventListener('click', showHostMappingMenu, false);

var hardwareButton = document.getElementById('menu_hardware');
hardwareButton.addEventListener('click', showHardwareMenu, false);

var monitorButton = document.getElementById('menu_monitor');
monitorButton.addEventListener('click', showMonitorMenu, false);

var upgradeButton = document.getElementById('menu_upgrade');
upgradeButton.addEventListener('click', showUpgradeMenu, false);

var helpButton = document.getElementById('menu_help');
helpButton.addEventListener('click', showHelpMenu, false);

function showStorageArrayMenu(){
document.getElementById('performance_img').style.display = 'block';
document.getElementById('summary').style.display='none';
document.getElementById('performance').style.display='none';
document.getElementById('host_mapping').style.display='block';
document.getElementById('hardware').style.display='block';
document.getElementById('menu_storage_img').style.display='none';
document.getElementById('menu_copy_services_img').style.display='none';
document.getElementById('menu_storage_array_img').style.display ='block';
document.getElementById('menu_hardware_img').style.display='none';
document.getElementById('menu_host_mappings_img').style.display='none';
document.getElementById('menu_upgrade_img').style.display='none';
document.getElementById('menu_monitor_img').style.display='none';
document.getElementById('menu_help_img').style.display='none';


}

function showStorageMenu(){
document.getElementById('performance_img').style.display = 'none';
document.getElementById('summary').style.display='none';
document.getElementById('performance').style.display='none';
document.getElementById('storage_copy_services').style.display='block';
document.getElementById('menu_hardware_img').style.display='none';
document.getElementById('menu_copy_services_img').style.display='none';
document.getElementById('menu_storage_array_img').style.display ='none';
document.getElementById('menu_storage_img').style.display='block';
document.getElementById('menu_host_mappings_img').style.display='none';
document.getElementById('menu_monitor_img').style.display='none';
document.getElementById('menu_upgrade_img').style.display='none';
document.getElementById('menu_help_img').style.display='none';


}

function showCopyServicesMenu(){
document.getElementById('performance_img').style.display = 'none';
document.getElementById('summary').style.display='block';
document.getElementById('performance').style.display='none';
document.getElementById('storage_copy_services').style.display='none';
document.getElementById('host_mapping').style.display='block';
document.getElementById('hardware').style.display='block';
document.getElementById('setup').style.display='block';
document.getElementById('menu_storage_array_img').style.display ='none';
document.getElementById('menu_storage_img').style.display='none';
document.getElementById('menu_copy_services_img').style.display='block';
document.getElementById('menu_hardware_img').style.display='none';
document.getElementById('menu_monitor_img').style.display='none';
document.getElementById('menu_upgrade_img').style.display='none';
document.getElementById('menu_host_mappings_img').style.display='none';
document.getElementById('menu_help_img').style.display='none';

}

function showHostMappingMenu(){
document.getElementById('performance_img').style.display = 'none';
document.getElementById('summary').style.display='block';
document.getElementById('performance').style.display='none';
document.getElementById('storage_copy_services').style.display='none';
document.getElementById('host_mapping').style.display='none';
document.getElementById('menu_storage_img').style.display='none';
document.getElementById('menu_copy_services_img').style.display='none';
document.getElementById('menu_hardware_img').style.display='none';
document.getElementById('menu_monitor_img').style.display='none';
document.getElementById('menu_upgrade_img').style.display='none';
document.getElementById('menu_host_mappings_img').style.display='block';
document.getElementById('menu_help_img').style.display='none';


}

function showHardwareMenu(){
document.getElementById('hardware').style.display='block';
document.getElementById('setup').style.display='block';
document.getElementById('menu_storage_array_img').style.display ='none';
document.getElementById('host_mapping').style.display='none';
document.getElementById('storage_copy_services').style.display='none';
document.getElementById('performance').style.display='block';
document.getElementById('performance_img').style.display = 'none';
document.getElementById('menu_storage_img').style.display='none';
document.getElementById('menu_copy_services_img').style.display='none';
document.getElementById('menu_host_mappings_img').style.display='none';
document.getElementById('menu_monitor_img').style.display='none';
document.getElementById('menu_upgrade_img').style.display='none';
document.getElementById('menu_hardware_img').style.display='block';
document.getElementById('menu_help_img').style.display='none';

}

function showMonitorMenu(){
document.getElementById('performance').style.display='block';
document.getElementById('hardware').style.display='block';
document.getElementById('setup').style.display='block';
document.getElementById('performance_img').style.display = 'none';
document.getElementById('host_mapping').style.display='block';
document.getElementById('storage_copy_services').style.display='block';
document.getElementById('menu_storage_array_img').style.display ='none';
document.getElementById('menu_storage_img').style.display='none';
document.getElementById('menu_copy_services_img').style.display='none';
document.getElementById('menu_host_mappings_img').style.display='none';
document.getElementById('menu_hardware_img').style.display='none';
document.getElementById('menu_monitor_img').style.display='block';
document.getElementById('menu_upgrade_img').style.display='none';
document.getElementById('menu_help_img').style.display='none';



}

function showUpgradeMenu(){
document.getElementById('host_mapping').style.display='none';
document.getElementById('hardware').style.display='none';
document.getElementById('setup').style.display='block';
document.getElementById('performance_img').style.display = 'none';
document.getElementById('menu_copy_services_img').style.display='none';
document.getElementById('menu_host_mappings_img').style.display='none';
document.getElementById('menu_hardware_img').style.display='none';
document.getElementById('menu_monitor_img').style.display='none';
document.getElementById('menu_storage_array_img').style.display ='none';
document.getElementById('menu_upgrade_img').style.display='block';
document.getElementById('menu_help_img').style.display='none';


}

function showHelpMenu(){
document.getElementById('hardware').style.display='none';
document.getElementById('host_mapping').style.display='none';
document.getElementById('setup').style.display='none';
document.getElementById('performance_img').style.display = 'none';
document.getElementById('menu_copy_services_img').style.display='none';
document.getElementById('menu_host_mappings_img').style.display='none';
document.getElementById('menu_hardware_img').style.display='none';
document.getElementById('menu_monitor_img').style.display='none';
document.getElementById('menu_storage_array_img').style.display ='none';
document.getElementById('menu_upgrade_img').style.display='none';
document.getElementById('menu_help_img').style.display='block';

}