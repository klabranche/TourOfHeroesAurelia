//http://aurelia.io/hub.html#/doc/article/aurelia/binding/latest/binding-value-converters/2

export class UppercaseValueConverter {
  public toView(value) {
    return value && value.toUpperCase();
  }
}