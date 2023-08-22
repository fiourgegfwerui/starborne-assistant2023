export default {
	API_URL: "https://sba.starborne.com",
	//WEBSOCKET_HUB_URL: "https://enxdpe3e4try.x.pipedream.net",
	//WEBSOCKET_HUB_URL: "https://starbornegameserver-live-01.azurewebsites.net/GameHub",
	//VERSION_VALUE: "0.11.14.1558",
	//TODO - really need a way to auto-update the version value
	//https://api2.patchkit.net/1/apps/ed6557e211c93919d637b61e7278fbcf/versions/
	PATCHKIT_CLIENT_SECRET: "ed6557e211c93919d637b61e7278fbcf",
	VERSION_VALUE: "32",
	ENDPOINTS: {
		AUTH: "https://auth-live.starborne.com/connect/token",
		LIST_GAMES: "https://sba.starborne.com/api/Player/GetGames",
		JOIN_SERVER: "https://sba.starborne.com/api/Player/JoinServer"
	},
	GAME_ENDPOINTS: {
		WEBSOCKET: "/GameHub",
		MAP: "/api/Map/GetMap",
		STATIONS: "/api/Player/GetStations",
		PLAYERS: "/api/Player/GetPlayers",
		ALLIANCES: "/api/Player/GetAlliances",
		EMPIRES: "/api/Player/GetEmpires",
		CLAIM_PROVIDERS: "/api/Player/GetClaimProviders",
	}
}
