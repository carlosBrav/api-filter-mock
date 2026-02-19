const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin: "http://localhost:3014",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
})); // permite todos los orígenes
app.use(express.json());


const validateIfAisInB = (values_left, values_right) => {
  return values_left.some((val) => values_right.includes(val))
}

app.post('/api/v1/filters', (req, res) => {
  const { atractions } = req.body;
const response = {
  "success": true,
  "message": "Success",
  "data": {
    "paymentSystem": [
      {
        "key": "OPT_game_type_normal",
        "value": "Normal",
        "enabled": !validateIfAisInB(atractions,["OPT_atraccion_collect"])
      },
      {
        "key": "OPT_game_type_ways_megaways",
        "value": "Megaways",
        "enabled": true
      },
      {
        "key": "OPT_game_type_cluster",
        "value": "Cluster",
        "enabled": !validateIfAisInB(atractions,["OPT_atraccion_respin","OPT_atraccion_multiple_grids"])
      },
      {
        "key": "OPT_game_type_anywhere",
        "value": "Anywhere",
        "enabled": true
      }
    ],
    "providers": [
      {
        "key": "casinoTechnology",
        "value": "CT Interactive",
        "enabled": true
      },
      {
        "key": "pragmatic",
        "value": "Pragmatic",
        "enabled": !validateIfAisInB(atractions,["OPT_atraccion_colossal_symbols","OPT_atraccion_increasing_multipliers"])
      },
      {
        "key": "atomicslotlab",
        "value": "Bragg (Oryx) _ atomicslotlab",
        "enabled": true
      },
      {
        "key": "nolimitcity",
        "value": "Nolimit city",
        "enabled": !validateIfAisInB(atractions,["OPT_atraccion_expanding_symbol","OPT_atraccion_progressive_free_spins"])
      }
    ],
    "jackpotType": [
      {
        "key": "OPT_jackpot_type_compartido",
        "value": "Compartido",
        "enabled": true
      },
      {
        "key": "OPT_jackpot_type_standalone",
        "value": "Standalone",
        "enabled": !validateIfAisInB(atractions,["OPT_atraccion_expanding_symbol","OPT_atraccion_progressive_free_spins"])
      },
      {
        "key": "OPT_jackpot_type_compartido_juego",
        "value": "Compartido Juego",
        "enabled": true
      }
    ],
    "atraction": [
      {
        "key": "OPT_atraccion_collect",
        "value": "Collect",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_respin",
        "value": "Respin",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_multiple_grids",
        "value": "Multiple grids",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_apuesta_aumentada",
        "value": "Apuesta aumentada",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_sticky_wild",
        "value": "Sticky wild",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_simbolos_stack",
        "value": "Simbolos stack",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_cascada",
        "value": "Cascada",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_colossal_symbols",
        "value": "Colossal symbols",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_Mystery_Symbols",
        "value": "Mystery symbols",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_increasing_multipliers",
        "value": "Increasing multipliers",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_hold_and_win",
        "value": "Hold and win",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_roaming_wilds",
        "value": "Roaming wilds",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_expanding_symbol",
        "value": "Expanding symbol",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_progressive_free_spins",
        "value": "Progressive free spins",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_simbolos_altos",
        "value": "Simbolos altos",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_pago_ambos_sentidos",
        "value": "Pago ambos sentidos",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_Expanding_Reels",
        "value": "Expanding reels",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_wheel_of_fortune",
        "value": "Wheel of fortune",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_Compra_Super_Bonus",
        "value": "Compra super bonus",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_Feature_Spin",
        "value": "Feature spin",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_up_symbol",
        "value": "Up symbol",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_progressive_wilds",
        "value": "Progressive wilds",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_wild_reel_unlock",
        "value": "Wild reel unlock",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_risk_gamble",
        "value": "Risk Gamble",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_Symbol_Multipliers",
        "value": "Symbol Multipliers",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_compra_atraccion",
        "value": "Compra Atraccion",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_expanding_wild",
        "value": "Expanding Wild",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_random_wilds",
        "value": "Random Wilds",
        "enabled": true
      },
      {
        "key": "OPT_atraccion_wild_multiplicador",
        "value": "Wild Multiplicador",
        "enabled": true
      }
    ],
    "themes": [
      {
        "key": "OPT_theme_animales_salvajes",
        "value": "Animales Salvajes",
        "enabled": !validateIfAisInB(atractions,["OPT_atraccion_colossal_symbols","OPT_atraccion_increasing_multipliers"])
      },
      {
        "key": "OPT_theme_aventura",
        "value": "Aventura",
        "enabled": true
      },
      {
        "key": "OPT_theme_naturaleza",
        "value": "Naturaleza",
        "enabled": true
      }
    ],
    "bettingRange": {
      "min": 0.40,
      "max": 1
    },
    "volatility": [
      {
        "key": "OPT_vol_low",
        "value": "Baja",
        "enabled": true
      },
      {
        "key": "OPT_vol_medium",
        "value": "Media",
        "enabled": true
      },
      {
        "key": "OPT_vol_high",
        "value": "Alta",
        "enabled": true
      },
      {
        "key": "OPT_vol_very_high",
        "value": "Muy Alta",
        "enabled": !validateIfAisInB(atractions,["OPT_atraccion_colossal_symbols","OPT_atraccion_increasing_multipliers"])
      }
    ],
  }
}
  res.status(200).json(response);
});

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
  console.log('Prueba GET: http://localhost:3000/usuarios');

});
