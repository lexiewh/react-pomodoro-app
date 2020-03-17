export default function validate(values) {
  let errors = {}

  if (!values.prodTime) {
    errors.prodTime = 'Productive time is required'
  } else if (values.prodTime <= 0) {
    errors.prodTime = 'Productive time needs to be more than zero'
  } else if (values.prodTime >= 240) {
    errors.prodTime = 'Productive time needs to be less than three hours'
  }

  if (!values.shortBreak) {
    errors.shortBreak = 'Short break time is required'
  } else if (values.shortBreak <= 0) {
    errors.shortBreak = 'Break needs to be more than zero'
  } else if (values.shortBreak >= 60) {
    errors.shortBreak = 'Break cannot be more than an hour'
  }

  if (!values.longBreak) {
    errors.longBreak = 'Long break time is required'
  } else if (values.longBreak <= 0) {
    errors.longBreak = 'Break needs to be more than zero'
  } else if (values.longBreak >= 60) {
    errors.shortBreak = 'Break cannot be more than an hour'
  }

  if (!values.interval) {
    errors.interval = 'Interval is required'
  } else if (values.interval <= 0) {
    errors.interval = 'Interval needs to be greater than zero'
  } else if (values.interval >= 10) {
    errors.interval = 'Interval has to be ten or less'
  }

  return errors
}
