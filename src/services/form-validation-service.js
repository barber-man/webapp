export class FormValidationService {
  constructor(){
    this.MESSAGES = {
      EMAIL: 'Informe um email válido',
      BLANK: 'Campos em destaque são obrigatórios',
      PASSWORD: 'Informe sua senha atual',
      PASSWORD_NEW : {
        REQUIRED: 'Informe uma nova senha',
        SHOULD_BE_DIFFERENT: 'Nova senha deve ser diferente da senha atual'
      },
      PASSWORD_CONFIRMATION: {
        REQUIRED: 'Confirme a nova senha',
        DOES_NOT_MATCH: 'Confirmação de nova senha deve ser igual à nova senha'
      },
      QUANTITY: 'Quantidade deve ficar dentro da variação permitida'
    };
    this.CSS_CLASSES = {
      INVALID: 'is-invalid'
    };
  }

  validate(formElement){
    let requiredFields = this.getRequiredFields(formElement);
    requiredFields = this.resetRequiredFieldsValidationState(requiredFields);
    let errors = this.getErrors(requiredFields);
    return errors.length ? errors : null;
  }

  getRequiredFields(formElement){
    return $('[data-validate]', formElement);
  }

  resetRequiredFieldsValidationState(requiredFields){
    for (var i = 0; i < requiredFields.length; i++)
      this.resetField(requiredFields[i]);
    return requiredFields;
  }

  getErrors(fields){
    let errors = [];
    for (var i = 0; i < fields.length; i++) {
      let field = $(fields[i]);
      let error = this.validateField(field, fields);
      if(error)
        errors.push(error);
    };
    return this.removeDuplicates(errors);
  }

  validateField(fieldToValidate, requiredFields){
    if(this.shouldValidateBlank(fieldToValidate, requiredFields) && this.isBlankField(fieldToValidate))
      return this.invalidateField(fieldToValidate);

    switch(this.getValidationType(fieldToValidate)){
      case 'email':
        return this.validateEmail(fieldToValidate);
      case 'password-new':
        return this.validateNewPassword(fieldToValidate, requiredFields);
      case 'username':
        return this.validateUsername(fieldToValidate);
      case 'quantity':
        return this.validateQuantity(fieldToValidate);
    }
  }

  validateEmail(field){
    let emailAddress = field.val().toLowerCase();
    let isEmailValid = this.isValidEmailAddress(emailAddress);
    this.resetField(field);
    if(!isEmailValid)
      return this.invalidateField(field);
  }

  validateUsername(field){
    let emailAddress = field.val().toLowerCase();
    if(!this.isValidEmailAddress(emailAddress) || emailAddress === "admin")
      return this.invalidateField(field);
  }

  isValidEmailAddress(emailAddress){
    let regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(emailAddress);
  }

  validateQuantity(field){
    let quantity = parseInt(field.val());
    if(this.isQuantityOutOfAllowedRange(field, quantity))
      return this.invalidateField(field);
  }

  isQuantityOutOfAllowedRange(field, quantity){
    let limits = this.getQuantityLimits(field);
    if(limits.max)
      return quantity < limits.min || quantity > limits.max
    else
      return quantity < limits.min
  }

  getQuantityLimits(field){
    return {
      min: field.attr('data-validate-min') || 1,
      max: field.attr('data-validate-max')
    };
  }

  validateNewPassword(field, requiredFields){
    let passwordConfirmationField = this.findField('password-confirmation', requiredFields);
    let isBlankNewPassword = this.isBlankField(field);
    let isBlankPasswordConfirmation = this.isBlankField(passwordConfirmationField);

    if(isBlankNewPassword && !isBlankPasswordConfirmation){
      return this.invalidateField(field, 'REQUIRED');
    }
    else if(!isBlankNewPassword && isBlankPasswordConfirmation){
      return this.invalidateField(passwordConfirmationField, 'REQUIRED');
    }
    else if(!isBlankNewPassword && !isBlankPasswordConfirmation){
      return this.validatePasswords(field, passwordConfirmationField, requiredFields);
    }
  }

  validatePasswords(newPasswordField, confirmationPasswordField, requiredFields){
    let passwordField = this.findField('password', requiredFields);
    if(newPasswordField.val() !== confirmationPasswordField.val())
      return this.invalidateField(confirmationPasswordField, 'DOES_NOT_MATCH');
    else if(passwordField && (passwordField.val() === newPasswordField.val()))
      return this.invalidateField(newPasswordField, 'SHOULD_BE_DIFFERENT');
  }

  invalidateField(field, validationSubType){
    let validationType = this.dashToUnderline(this.getValidationType(field));
    let message = this.buildInvalidFieldMessage(field, validationType, validationSubType);
    field.addClass(this.CSS_CLASSES.INVALID);
    return message;
  }

  buildInvalidFieldMessage(field, validationType, validationSubType){
    let message = this.getInvalidFieldMessage(validationType, validationSubType);
    if(validationType == 'quantity')
      return this.appendInvalidQuantityMessage(field, message);
    return message;
  }

  getInvalidFieldMessage(validationType, validationSubType){
    let type = validationType.toUpperCase();
    let subtype = validationSubType ? validationSubType.toUpperCase() : null;
    let message = this.MESSAGES[type];
    if(subtype)
      return message[subtype];
    if(typeof message != 'string')
      return message.REQUIRED;
    return message;
  }

  appendInvalidQuantityMessage(field, message){
    let limits = this.getQuantityLimits(field);
    if(limits.max)
      return `${message} (min: ${limits.min} max: ${limits.max})`;
    return `${message} (min: ${limits.min})`;
  }

  resetField(field){
    return $(field).removeClass(this.CSS_CLASSES.INVALID);
  }

  getValidationType(field){
    let type = field.attr('data-validate');
    return type ? type : 'blank';
  }

  findField(validationType, fields){
    for (var i = 0; i < fields.length; i++){
      let field = $(fields[i]);
      if(field.attr('data-validate') == validationType)
        return field;
    }
  }

  removeDuplicates(errors){
    return errors.filter((error, index) => {
      return errors.indexOf(error) === index;
    });
  }

  isBlankField(field){
    let value = $.trim(field.val());
    return value === '';
  }

  shouldValidateBlank(field, requiredFields){
    let fieldsToNotValidadeBlank = this.getFieldsToNotValidate(requiredFields);
    for (var i = 0; i < fieldsToNotValidadeBlank.length; i++)
      if(fieldsToNotValidadeBlank[i] == field.attr('data-validate'))
        return false;
    return true;
  }

  getFieldsToNotValidate(requiredFields){
    let fields = ['password-confirmation'];
    if(this.isCurrentPasswordPresentInForm(requiredFields))
      fields.push('password-new');
    return fields;
  }

  isCurrentPasswordPresentInForm(requiredFields){
    for (var i = 0; i < requiredFields.length; i++){
      let field = $(requiredFields[i]);
      if(this.getValidationType(field) == 'password')
        return true;
    }
  }

  dashToUnderline(text){
    return text.replace('-','_');
  }
}
