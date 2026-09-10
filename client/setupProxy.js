import { createProxyMiddleware } from "http-proxy-middleware";

export default (app) => {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "/api",// "http://localhost:5000", Production
			changeOrigin: true
		})
	);
};
