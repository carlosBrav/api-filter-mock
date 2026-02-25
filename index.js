const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const whiteList = [
  'http://localhost:3014',
  'https://effervescent-sundae-bbbab3.netlify.app'
];

app.use(cors({
  origin: whiteList,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
})); // permite todos los orígenes
app.use(express.json());

const validateIfAisInB = (values_left, values_right) => {
  return values_left.some((val) => values_right.includes(val))
}

app.post('/api/v1/filters', (req, res) => {
  const { 
    attractions = [], 
    jackpots = [], 
    providers = [], 
    themes = [],
    paymentSystem = [],
    volatility = []
  } = req.body;
const response = {
  "success": true,
  "message": "Success",
  "data": {
    "paymentSystem": [
      {
        "key": "OPT_game_type_normal",
        "value": "Normal",
        "enabled": true // Siempre disponible como base
      },
      {
        "key": "OPT_game_type_ways_megaways",
        "value": "Megaways",
        "enabled": validateIfAisInB(attractions, ["OPT_atraccion_collect", "OPT_atraccion_respin"]) || 
                   validateIfAisInB(jackpots, ["OPT_jackpot_type_standalone"])
      },
      {
        "key": "OPT_game_type_cluster",
        "value": "Cluster",
        "enabled": validateIfAisInB(providers, ["pragmatic", "nolimitcity"])
      },
      {
        "key": "OPT_game_type_anywhere",
        "value": "Anywhere",
        "enabled": validateIfAisInB(themes, ["OPT_theme_animales_salvajes"])
      }
    ],
    "providers": [
      {
        "key": "casinoTechnology",
        "value": "CT Interactive",
        "enabled": validateIfAisInB(attractions, ["OPT_atraccion_multiple_grids", "OPT_atraccion_Expanding_Reels"])
      },
      {
        "key": "pragmatic",
        "value": "Pragmatic",
        "enabled": validateIfAisInB(paymentSystem, ["OPT_game_type_cluster"])
      },
      {
        "key": "atomicslotlab",
        "value": "Bragg (Oryx)",
        "enabled": true
      },
      {
        "key": "nolimitcity",
        "value": "Nolimit city",
        "enabled": validateIfAisInB(volatility, ["OPT_vol_low"]) || 
                   validateIfAisInB(jackpots, ["OPT_jackpot_type_compartido"])
      }
    ],
    "jackpotType": [
      {
        "key": "OPT_jackpot_type_compartido",
        "value": "Compartido",
        "enabled": validateIfAisInB(attractions, ["OPT_atraccion_risk_gamble", "OPT_atraccion_cascada"])
      },
      {
        "key": "OPT_jackpot_type_standalone",
        "value": "Standalone",
        "enabled": validateIfAisInB(paymentSystem, ["OPT_game_type_ways_megaways"])
      },
      {
        "key": "OPT_jackpot_type_compartido_juego",
        "value": "Compartido Juego",
        "enabled": true
      }
    ],
    "attraction": [
      {
        "key": "OPT_atraccion_collect",
        "value": "Collect",
        "enabled": validateIfAisInB(providers, ["nolimitcity"])
      },
      {
        "key": "OPT_atraccion_respin",
        "value": "Respin",
        "enabled": validateIfAisInB(themes, ["OPT_theme_aventura"])
      },
      {
        "key": "OPT_atraccion_cascada",
        "value": "Cascada",
        "enabled": validateIfAisInB(jackpots, ["OPT_jackpot_type_compartido"])
      },
      {
        "key": "OPT_atraccion_colossal_symbols",
        "value": "Colossal symbols",
        "enabled": validateIfAisInB(volatility, ["OPT_vol_high", "OPT_vol_very_high"])
      },
      {
        "key": "OPT_atraccion_increasing_multipliers",
        "value": "Increasing multipliers",
        "enabled": validateIfAisInB(paymentSystem, ["OPT_game_type_cluster"])
      },
      {
        "key": "OPT_atraccion_Expanding_Reels",
        "value": "Expanding reels",
        "enabled": validateIfAisInB(providers, ["casinoTechnology"])
      },
      {
        "key": "OPT_atraccion_risk_gamble",
        "value": "Risk Gamble",
        "enabled": validateIfAisInB(jackpots, ["OPT_jackpot_type_compartido"])
      },
      // Los demás se mantienen true para no sobre-bloquear (mantener el ~55%)
      { "key": "OPT_atraccion_sticky_wild", "value": "Sticky wild", "enabled": true },
      { "key": "OPT_atraccion_simbolos_stack", "value": "Simbolos stack", "enabled": true },
      { "key": "OPT_atraccion_Mystery_Symbols", "value": "Mystery symbols", "enabled": true },
      { "key": "OPT_atraccion_hold_and_win", "value": "Hold and win", "enabled": true },
      { "key": "OPT_atraccion_expanding_symbol", "value": "Expanding symbol", "enabled": true },
      { "key": "OPT_atraccion_progressive_free_spins", "value": "Progressive free spins", "enabled": true },
      { "key": "OPT_atraccion_pago_ambos_sentidos", "value": "Pago ambos sentidos", "enabled": true },
      { "key": "OPT_atraccion_wheel_of_fortune", "value": "Wheel of fortune", "enabled": true },
      { "key": "OPT_atraccion_Compra_Super_Bonus", "value": "Compra super bonus", "enabled": true },
      { "key": "OPT_atraccion_Feature_Spin", "value": "Feature spin", "enabled": true },
      { "key": "OPT_atraccion_progressive_wilds", "value": "Progressive wilds", "enabled": true },
      { "key": "OPT_atraccion_Symbol_Multipliers", "value": "Symbol Multipliers", "enabled": true },
      { "key": "OPT_atraccion_expanding_wild", "value": "Expanding Wild", "enabled": true },
      { "key": "OPT_atraccion_wild_multiplicador", "value": "Wild Multiplicador", "enabled": true }
    ],
    "themes": [
      {
        "key": "OPT_theme_animales_salvajes",
        "value": "Animales Salvajes",
        "enabled": validateIfAisInB(paymentSystem, ["OPT_game_type_anywhere"])
      },
      {
        "key": "OPT_theme_aventura",
        "value": "Aventura",
        "enabled": validateIfAisInB(attractions, ["OPT_atraccion_respin"])
      },
      {
        "key": "OPT_theme_naturaleza",
        "value": "Naturaleza",
        "enabled": true
      }
    ],
    "volatility": [
      {
        "key": "OPT_vol_low",
        "value": "Baja",
        "enabled": validateIfAisInB(providers, ["nolimitcity"])
      },
      {
        "key": "OPT_vol_medium",
        "value": "Media",
        "enabled": true
      },
      {
        "key": "OPT_vol_high",
        "value": "Alta",
        "enabled": validateIfAisInB(attractions, ["OPT_atraccion_colossal_symbols"])
      },
      {
        "key": "OPT_vol_very_high",
        "value": "Muy Alta",
        "enabled": validateIfAisInB(attractions, ["OPT_atraccion_increasing_multipliers"])
      }
    ]
  }
};
  res.status(200).json(response);
});

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
  console.log('Prueba GET: http://localhost:3000/usuarios');
});




