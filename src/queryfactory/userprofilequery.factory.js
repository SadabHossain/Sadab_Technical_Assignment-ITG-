module.exports = {
    CREATE_USER_PROFILE: `INSERT INTO user_profile
            (user_name
             , email
             , password
             , phone_number
             , date_of_birth
             , time_of_birth
             , gender
             , marital_status
             , language
             , profile_picture)
             VALUES (
                 '%userName%'
                 , '%email%'
                 , '%password%'
                 , '%phoneNumber%'
                 , '%dateOfBirth%'
                 , '%timeOfBirth%'
                 , '%gender%'
                 , '%maritalStatus%'
                 , '%language%'
                 ,'%profilePicture%');`,

    UPDATE_USER_PROFILE: `UPDATE  user_profile SET 
             user_name ='%userName%'
             , email ='%email%'
             , password ='%password%'
             , phone_number ='%phoneNumber%'
             , date_of_birth ='%dateOfBirth%'
             , time_of_birth ='%timeOfBirth%'
             , gender = '%gender%'
             , marital_status = '%maritalStatus%'
             , language = '%language%'
             , profile_picture = '%profilePicture%'
             WHERE user_profile_id ='%userProfileId%'; `

}