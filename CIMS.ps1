#Connectiing Connect-AzAccount 

#Resouce group creation
New-AzResourceGroup -Name ty-rg -Location 'East US' 

#Network Security group
$nsg1 = New-AzNetworkSecurityGroup -Name "ty-nsg-01" -ResourceGroupName ty-rg -Location 'East US'
$nsg2 = New-AzNetworkSecurityGroup -Name "ty-vm-01-nsg" -ResourceGroupName ty-rg -Location 'East US'

#Resource Subnet
$subnetconfig1 = New-AzVirtualNetworkSubnetConfig -Name ty-sn-01 -AddressPrefix "10.0.0.0/26" -NetworkSecurityGroup $nsg1 $nsg2

#Virtual Network
$vnet1 = New-AzVirtualNetwork -Name "ty-vn-01" -ResourceGroupName ty-rg -Location 'East US' -AddressPrefix "10.0.0.0/25" -Subnet $subnet1config

#Public IP Address
$Address1 = New-AzPublicIpAddress -Name "ty-pip-01" -ResourceGroupName ty-rg -Location 'East US' -AllocationMethod Dynamic 

#Network Interface Card 
$servernic01 = New-AzNetworkInterface -Name "ty-nic-01" -ResourceGroupName ty-rg -Location 'East US' -Subnet $vnet1.Subnets -PublicIpAddress $Address1 -NetworkSecurityGroup $nsg1 -PrivateIpAddress "10.0.0.4" 

#Storage Account
$Stacc01 = New-AzStorageAccount -ResourceGroupName ty-rg-01 -AccountName "tysa01" -Location 'East US' -SkuName Standard_GRS 

#Acquire Server Credentials
$Servercred1 = Get-Credential -Message "Please enter a username and password" 
# username = BTP
# password = IIITPune@123 

#create Server 
$serverconfig1| Set-AzVMOperatingSystem -Windows -ComputerName "ty-vm-01" -Credential $Servercred1 | Set-AzVMSourceImage -PublisherName "MicrosoftWindowsServer" -Offer "WindowsServer" -Skus "2016-Datacenter" -Version latest | Set-AzVMBootDiagnostic -Enable -ResourceGroupName ty-rg-01 -StorageAccountName "tysa01" | Add- AzVMNetworkInterface -Id $servernic01.Id | Add-AzVMDataDisk -Name Disk01 -DiskSizeInGB 1024 -StorageAccountType Standard_LRS -Lun 0 -CreateOption Empty 

#creating virtual machine
$machine1 = New-AzVM -ResourceGroupName ty-rg-01 -Location 'East US' -VM $serverconfig1

