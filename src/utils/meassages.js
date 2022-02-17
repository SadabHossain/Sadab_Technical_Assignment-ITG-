
/** cm means commonMessages */
cm = {
    RECORD: 'Record',
    CREATED: 'created',
    UPDATE: 'update',
    UPDATED: 'updated',
    DELETE: 'delete',
    DELETED: 'deleted',
    SUCCESSFULLY: 'successfully',
    FAILED: 'failed',
    COULD: 'could',
    NOT: 'not',
    BE: 'be',
}

module.exports = {
    SUCCESS: 'Success',
    FAILURE: 'Failure',
    PARAMETERMISSING: 'Required parameter is(are) missing: ',
    PARAMETERINVALID: 'Required parameter is(are) invalid: ',
    ERROR: {
        'someThingWentWrong': 'Something went wrong',
        'dbCouldNotBeConnected': 'A connection to the database could not be established',
        'couldNotGetData': 'Could not get data',
        'noDataFound': 'No data found'
    },
    UPDATE: {
        'dataUpdatedSuccessfully': cm.RECORD + ' ' + cm.UPDATED + ' ' + cm.SUCCESSFULLY,
        'dataUpdateFailed': cm.RECORD + ' ' + cm.UPDATE + ' ' + cm.FAILED
    },
    CREATE: {
        'recordCreatedSuccessfully': cm.RECORD + ' ' + cm.CREATED + ' ' + cm.SUCCESSFULLY,
        'recordCouldNotBeCreated': cm.RECORD + ' ' + cm.COULD + ' ' + cm.NOT + ' ' + cm.BE + ' ' + cm.CREATED
    },
    DELETE: {
        'recordDeletedSuccessfully': cm.RECORD + ' ' + cm.DELETED + ' ' + cm.SUCCESSFULLY,
        'recordCouldNotBeDeleted': cm.RECORD + ' ' + cm.COULD + ' ' + cm.NOT + ' ' + cm.BE + ' ' + cm.DELETED
    },
    userName: 'User name cannot be empty !',
    email: 'email cannot be empty !',
    password: 'password cannot be empty !',
    phoneNumber: 'phone number cannot be empty !',
    dateOfBirth: 'date of birth cannot be empty !',
    timeOfBirth: 'time of birth cannot be empty !',
    gender: 'please select gender !',
    maritalStatus: 'please select marital status  !',
    language: 'please select language !',
    profilePicture: 'profile cannit be empty !'
}