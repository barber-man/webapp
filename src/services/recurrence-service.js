export class RecurrenceService {
  selectRecurrence(planDetails, selectedRecurrenceId){
    let recurrence = this.getSelectedRecurrence(planDetails, selectedRecurrenceId)
    this.setSelectedRecurrence(planDetails, recurrence);
    this.setDevicesInstallationValue(recurrence);
    return planDetails;
  }

  getSelectedRecurrence(planDetails, selectedRecurrenceId){
    let selectedRecurrence;
    let defaultRecurrence = planDetails.recurrences[0];
    for (var i = 0; i < planDetails.recurrences.length; i++)
      if(planDetails.recurrences[i].id == selectedRecurrenceId)
        selectedRecurrence = planDetails.recurrences[i];
    return selectedRecurrence || defaultRecurrence;
  }

  setSelectedRecurrence(planDetails, selectedRecurrence){
    planDetails.selectedRecurrence = selectedRecurrence;
  }

  setDevicesInstallationValue(recurrence){
    for (var i = 0; i < recurrence.devices.length; i++){
      let device = recurrence.devices[i];
      device.value.installation = device.value.unit * device.quantity;
    }
  }
}
