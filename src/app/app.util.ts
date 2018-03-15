
export namespace Utils {

  export const isInOwnWidgetWindow = () => /^#\/window\//.test(window.location.hash);

}