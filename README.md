Projeto desenvolvido com NestJS

---

## ✅ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/EmersonTanno/ibge_back.git

# Acesse a pasta do projeto
cd ibge_back

# Instale as dependências
npm install
```

## ▶️ Execução

```bash
# Executar em modo de desenvolvimento
npm run start:dev

# Executar em produção
npm run start
```

## 📚 Rotas da API

### 📄 Listar ocorrência de nomes em um período de tempo
GET `/evolution?name=nomeBuscado&startDecade=dataDeInicio&endDecade=dataDeFim` </br>
Exemplo: `http://localhost:3000/evolution?name=matheus&startDecade=1970&endDecade=2020` </br>
Resposta:
`200 OK`
``` json
{
    "nome": "MATHEUS",
    "periods": [
        {
            "start": "1970",
            "end": "1980",
            "frequency": 2370
        },
        {
            "start": "1980",
            "end": "1990",
            "frequency": 13765
        },
        {
            "start": "1990",
            "end": "2000",
            "frequency": 142256
        },
        {
            "start": "2000",
            "end": "2010",
            "frequency": 190298
        }
    ]
}
```

### 🔍 Buscar pelos top 3 nomes de uma região
GET `/top-names?localidade=codigoDaLocalidade` </br>
Exemplo: `http://localhost:3000/trend/top-names?localidade=41` </br>
Resposta:
`200 OK`
``` json
[
    {
        "decada": "1930",
        "top1": {
            "nome": "MARIA",
            "frequencia": 176
        },
        "top2": {
            "nome": "JOSE",
            "frequencia": 44
        },
        "top3": {
            "nome": "BENEDITO",
            "frequencia": 43
        }
    },
    {
        "decada": "1940",
        "top1": {
            "nome": "MARIA",
            "frequencia": 345
        },
        "top2": {
            "nome": "JOSE",
            "frequencia": 156
        },
        "top3": {
            "nome": "JOAO",
            "frequencia": 71
        }
    },
    {
        "decada": "1950",
        "top1": {
            "nome": "MARIA",
            "frequencia": 888
        },
        "top2": {
            "nome": "JOSE",
            "frequencia": 446
        },
        "top3": {
            "nome": "JOAO",
            "frequencia": 183
        }
    },
    {
        "decada": "1960",
        "top1": {
            "nome": "MARIA",
            "frequencia": 1894
        },
        "top2": {
            "nome": "JOSE",
            "frequencia": 865
        },
        "top3": {
            "nome": "ANTONIO",
            "frequencia": 324
        }
    },
    {
        "decada": "1970",
        "top1": {
            "nome": "MARIA",
            "frequencia": 1788
        },
        "top2": {
            "nome": "JOSE",
            "frequencia": 901
        },
        "top3": {
            "nome": "ANTONIO",
            "frequencia": 397
        }
    },
    {
        "decada": "1980",
        "top1": {
            "nome": "MARIA",
            "frequencia": 977
        },
        "top2": {
            "nome": "JOSE",
            "frequencia": 628
        },
        "top3": {
            "nome": "ANA",
            "frequencia": 465
        }
    },
    {
        "decada": "1990",
        "top1": {
            "nome": "MARIA",
            "frequencia": 479
        },
        "top2": {
            "nome": "ANA",
            "frequencia": 429
        },
        "top3": {
            "nome": "JOSE",
            "frequencia": 374
        }
    },
    {
        "decada": "2000",
        "top1": {
            "nome": "ANA",
            "frequencia": 588
        },
        "top2": {
            "nome": "LUCAS",
            "frequencia": 500
        },
        "top3": {
            "nome": "JOAO",
            "frequencia": 404
        }
    },
    {
        "decada": "2010",
        "top1": {
            "nome": "ANA",
            "frequencia": 1324
        },
        "top2": {
            "nome": "MARIA",
            "frequencia": 1016
        },
        "top3": {
            "nome": "JOAO",
            "frequencia": 929
        }
    }
]
```
### 📊 Comparação de dois nomes ao longo do tempo
GET `/comparison?name1=nomeBuscado&name2=nomeBuscado` </br>
Exemplo: `http://localhost:3000/comparison?name1=matheus&name2=herick` </br>
Resposta:
`200 OK`
``` json
[
    {
        "decada": "1930",
        "nome1": {
            "nome": "matheus",
            "frequencia": 90
        },
        "nome2": {
            "nome": "herick",
            "frequencia": 0
        }
    },
    {
        "decada": "1930,1940",
        "nome1": {
            "nome": "matheus",
            "frequencia": 203
        },
        "nome2": {
            "nome": "herick",
            "frequencia": 0
        }
    },
    {
        "decada": "1940,1950",
        "nome1": {
            "nome": "matheus",
            "frequencia": 298
        },
        "nome2": {
            "nome": "herick",
            "frequencia": 0
        }
    },
    {
        "decada": "1950,1960",
        "nome1": {
            "nome": "matheus",
            "frequencia": 470
        },
        "nome2": {
            "nome": "herick",
            "frequencia": 0
        }
    },
    {
        "decada": "1960,1970",
        "nome1": {
            "nome": "matheus",
            "frequencia": 684
        },
        "nome2": {
            "nome": "herick",
            "frequencia": 0
        }
    },
    {
        "decada": "1970,1980",
        "nome1": {
            "nome": "matheus",
            "frequencia": 2370
        },
        "nome2": {
            "nome": "herick",
            "frequencia": 75
        }
    },
    {
        "decada": "1980,1990",
        "nome1": {
            "nome": "matheus",
            "frequencia": 13765
        },
        "nome2": {
            "nome": "herick",
            "frequencia": 302
        }
    },
    {
        "decada": "1990,2000",
        "nome1": {
            "nome": "matheus",
            "frequencia": 142256
        },
        "nome2": {
            "nome": "herick",
            "frequencia": 719
        }
    },
    {
        "decada": "2000,2010",
        "nome1": {
            "nome": "matheus",
            "frequencia": 190298
        },
        "nome2": {
            "nome": "herick",
            "frequencia": 1539
        }
    }
]
```
