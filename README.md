there should be the following APIs



/user/{adminUUID}/user{UUID}

/admin/problem

admin/user/all

/admin/user/{id}

/admin/user/ ->create

/admin/user/ ->update

/admin/user/ -> delete

/superadmin/admin/all

/superadmin/admin/{id}

/superadmin/admin/ -> create

/superadmin/admin/ -> update

/superadmin/admin/ -> delete

/superadmin/config/all

/superadmin/config/{id}

/superadmin/config/- > create

/superadmin/config/- > update

/superadmin/config/ -> delete



db structure

tbl userHistory

id,user_id,package_id?,invoice_id?,action:string,description:text,metadata:text



tbl user

id,uuid,package_id,invoice_id,username,password,email?,phone?,meta_contact?:string,role -> enum(superadmin,admin,client),status -> enum(active,inactive),start_date,expire_date,current_usage_gb:int



tbl invoice

id,name?,package_id?,status -> enum(paid,pending)



tbl package

id,allowedConfigTemplates_id,name,days,max_usage_gb:int,price?,status(active,inactive)



allowedConfigTemplates

id,configTemplate_id



configTemplate

id,template:text
