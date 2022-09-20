import { PropertyCode } from './common/enums';

export class Properties {
  static readonly DependentProperties = {
    [PropertyCode.C]: [PropertyCode.A, PropertyCode.B],
    [PropertyCode.D]: [PropertyCode.A, PropertyCode.B],
    [PropertyCode.E]: [PropertyCode.A, PropertyCode.B],
  };

  static isDependent(propertyCode: string) {
    return propertyCode in Properties.DependentProperties;
  }

  static getDependentValues(
    property: PropertyCode,
    properties: Record<PropertyCode, any>
  ): any[] | undefined {
    if (property in properties) {
      let values = [];
      let codes = Properties.DependentProperties[property];
      codes.forEach((code) => values.push(properties[code]));
      return values;
    } else {
      return undefined;
    }
  }

  A = 3;
  B = 2;
  C = 0;
  D = 0;
  E = 0;
}
