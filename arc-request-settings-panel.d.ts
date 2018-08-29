/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   arc-request-settings-panel.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../paper-item/paper-item.d.ts" />
/// <reference path="../paper-item/paper-item-body.d.ts" />
/// <reference path="../paper-input/paper-input.d.ts" />
/// <reference path="../paper-toggle-button/paper-toggle-button.d.ts" />
/// <reference path="../iron-icon/iron-icon.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../arc-icons/arc-icons.d.ts" />
/// <reference path="../iron-pages/iron-pages.d.ts" />
/// <reference path="../paper-icon-button/paper-icon-button.d.ts" />
/// <reference path="../paper-styles/shadow.d.ts" />
/// <reference path="../arc-settings-panel-mixin/arc-settings-panel-mixin.d.ts" />

declare namespace UiElements {

  /**
   * Request settings panel for Advanced REST Client
   *
   * ## Styling
   *
   * `<arc-request-settings-panel>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--arc-request-settings-panel` | Mixin applied to this elment | `{}`
   * `--arc-settings-panel-header` | Mixin applied to settings panel header | `{}`
   * `--arc-settings-panel-header-color` | Color of the settings panel header | `--accent-color`
   * `--arc-settings-panel-icon-color` | Settings panel icon color | `rgba(0, 0, 0, 0.34)`
   * `--arc-settings-panel-description` | Mixin applied to the description elements | `{}`
   * `--arc-settings-panel-description-color` | Description color  | `rgba(0,0,0,0.74)`
   * `--arc-font-body1` | Mixin apllied to the description elements | `{}`
   * `--arc-font-subhead` | Mixin applied to the section headers | `{}`
   */
  class ArcRequestSettingsPanel extends
    ArcComponents.ArcSettingsPanelMixin(
    Polymer.Element) {

    /**
     * Variables support enabled setting.
     */
    variablesEnabled: boolean|null|undefined;

    /**
     * Sequest default timeout setting.
     */
    requestTimeout: number|null|undefined;

    /**
     * Global option to follow redirects
     */
    followRedirects: boolean|null|undefined;

    /**
     * Setting to validate certificates when making a request.
     */
    validateCertificates: object|null;

    /**
     * Enables platform's native HTTP transport.
     */
    nativeTransport: boolean|null|undefined;

    /**
     * When set `validateCertificates` options is disabled.
     * Chrome apps does not have this option.
     */
    sslDisabled: boolean|null|undefined;

    /**
     * Collects information abour system variables when evaluating
     * request.
     */
    systemVariables: boolean|null|undefined;

    /**
     * When set `systemVariables` options is disabled.
     * Chrome apps does not have this option.
     */
    systemVariablesDisabled: boolean|null|undefined;
    connectedCallback(): void;
    _processValues(values: any): any;
    _setSettings(values: any): void;
    _computeVariablesLabel(variablesEnabled: any): any;
    _computeTimeoutLabel(requestTimeout: any): any;
    _varsChanged(value: any): void;
    _timeoutChanged(value: any): void;
    _redirectsChanged(value: any): void;
    _certsChanged(value: any): void;
    _nativeTransportChanged(value: any): void;
    _sysVarsChanged(value: any): void;
  }
}

interface HTMLElementTagNameMap {
  "arc-request-settings-panel": UiElements.ArcRequestSettingsPanel;
}
