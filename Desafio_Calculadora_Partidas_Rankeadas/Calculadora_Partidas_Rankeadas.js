def calcular_rankeamento(vitorias, derrotas):
    saldo = vitorias - derrotas

    if vitorias < 10:
        nivel = "Ferro"
    elif 10 <= vitorias <= 20:
        nivel = "Bronze"
    elif 21 <= vitorias <= 50:
        nivel = "Prata"
    elif 51 <= vitorias <= 80:
        nivel = "Ouro"
    elif 81 <= vitorias <= 90:
        nivel = "Diamante"
    elif 91 <= vitorias <= 100:
        nivel = "Lendário"
    else:
        nivel = "Imortal"

    return saldo, nivel

# Exemplo de uso da função
vitorias = 85
derrotas = 20
saldoVitorias, nivel = calcular_rankeamento(vitorias, derrotas)

print(f"O Herói tem saldo de {saldoVitorias} está no nível de {nivel}")
