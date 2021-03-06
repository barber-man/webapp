// Aurelia has not a native sort value converter yet,
// so I took this solution from:
// https://gist.github.com/httpJunkie/431561420d62a746e02eef2d218d07d1

export class SortValueConverter {
  toView(array, property, direction) {
    if (!array)
      return array;
    let pname = property;
    let factor = direction.match(/^desc*/i) ? 1 : -1;
    var retvalue = array.sort((a, b) => {
      var textA = a.toUpperCase ? a[property].toUpperCase() : a[property];
      var textB = b.toUpperCase ? b[property].toUpperCase() : b[property];
      return (textA < textB) ? factor : (textA > textB) ? -factor : 0;
    });
    return retvalue;
  }
}
