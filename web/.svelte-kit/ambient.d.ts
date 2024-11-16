
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const GJS_DEBUG_TOPICS: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const OLDPWD: string;
	export const HOME: string;
	export const TERM_PROGRAM_VERSION: string;
	export const ZED_TERM: string;
	export const DESKTOP_SESSION: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const NVM_INC: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const MANAGERPID: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const SYSTEMD_EXEC_PID: string;
	export const IM_CONFIG_CHECK_ENV: string;
	export const GSM_SKIP_SSH_AGENT_WORKAROUND: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const COLOR: string;
	export const DEBUGINFOD_URLS: string;
	export const NVM_DIR: string;
	export const WAYLAND_DISPLAY: string;
	export const IM_CONFIG_PHASE: string;
	export const LOGNAME: string;
	export const JOURNAL_STREAM: string;
	export const WINDOWID: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const USERNAME: string;
	export const npm_config_cache: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const INVOCATION_ID: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_MENU_PREFIX: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XDG_SESSION_DESKTOP: string;
	export const TERM_PROGRAM: string;
	export const XAUTHORITY: string;
	export const XMODIFIERS: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const QT_IM_MODULE: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_CONFIG_DIRS: string;
	export const npm_config_global_prefix: string;
	export const npm_command: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		GJS_DEBUG_TOPICS: string;
		USER: string;
		npm_config_user_agent: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		SHLVL: string;
		npm_config_noproxy: string;
		OLDPWD: string;
		HOME: string;
		TERM_PROGRAM_VERSION: string;
		ZED_TERM: string;
		DESKTOP_SESSION: string;
		NVM_BIN: string;
		npm_package_json: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		NVM_INC: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		MANAGERPID: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		SYSTEMD_EXEC_PID: string;
		IM_CONFIG_CHECK_ENV: string;
		GSM_SKIP_SSH_AGENT_WORKAROUND: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		COLOR: string;
		DEBUGINFOD_URLS: string;
		NVM_DIR: string;
		WAYLAND_DISPLAY: string;
		IM_CONFIG_PHASE: string;
		LOGNAME: string;
		JOURNAL_STREAM: string;
		WINDOWID: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		MEMORY_PRESSURE_WATCH: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		USERNAME: string;
		npm_config_cache: string;
		GNOME_DESKTOP_SESSION_ID: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		INVOCATION_ID: string;
		NODE: string;
		npm_package_name: string;
		XDG_MENU_PREFIX: string;
		GNOME_SETUP_DISPLAY: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		XDG_SESSION_DESKTOP: string;
		TERM_PROGRAM: string;
		XAUTHORITY: string;
		XMODIFIERS: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		GJS_DEBUG_OUTPUT: string;
		ALACRITTY_WINDOW_ID: string;
		QT_IM_MODULE: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		npm_execpath: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		XDG_CONFIG_DIRS: string;
		npm_config_global_prefix: string;
		npm_command: string;
		MEMORY_PRESSURE_WRITE: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
