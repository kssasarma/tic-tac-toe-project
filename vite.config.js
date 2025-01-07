import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	// Load environment variables to use as base path
	const env = loadEnv(mode, process.cwd());
	const BASE_PATH = env.VITE_BASE_PATH;

	return {
		plugins: [react()],
		base: BASE_PATH,
	};
});
