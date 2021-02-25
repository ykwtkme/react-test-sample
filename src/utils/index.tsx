/**
 * Base props for components placed under `/src/components`.
 */
export interface BaseComponentProps {
  modifiers?: string[];
}

/**
 * Generate `className` from base class name and modifiers, based on MindBEMing.
 *
 * @note `mapModifiers` is expected to be used with `BaseComponentProps` interface.
 */
export function mapModifiers(baseClassName: string, modifiers: string | string[] = []): string {
  if (typeof modifiers === 'string') {
    modifiers = [modifiers];
  }

  return modifiers
    .filter((m) => m)
    .map((m) => `--${m}`)
    .reduce<string>((classNames, suffix) => (classNames += ` ${baseClassName}${suffix}`), baseClassName);
}
