# The World in One Day — 24 November 2026

[![news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Wanxt27/news-image-20261124-entry/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Wanxt27/news-image-20261124-entry/reward.svg)](https://make.fun/bounty/news-image-20261124)

One image that sums up the world's news of **Tuesday, 24 November 2026**: a dense
one-page newspaper front page — masthead, six big stories, and 94 more in brief —
**100 verified stories** in total, from every region and every beat.

## The six biggest stories of the day

1. **COP31 collapses with no climate pact** — the Antalya talks end in deadlock over
   fossil fuels; UN chief António Guterres is "deeply disappointed" as the longest COP
   ever closes without a deal.
2. **NATO sends AWACS to Poland** — the alliance deploys an early-warning aircraft after
   three Russian Kh-101 missiles land in Poland.
3. **Huang back as Nvidia CEO; shares soar 31%** — the board reinstates its founder 11 days
   after his resignation; the Nasdaq jumps 6% in a market-wide rally.
4. **24 dead in Indonesia candy factory fire** — a blaze at the PT Fonusa Agung Mulia
   plant in Banten; about 30 workers still missing.
5. **Iran vows to defy US naval blockade** — Tehran says it will use "all its tools" as
   Washington sanctions shadow banking and tankers are hit near Hormuz.
6. **Chess crown on the line in Geneva** — Gukesh defends his world title against
   Sindarov as Game 1 of the 14-game match begins.

The other 94 stories cover the war in Ukraine, Gaza, the US Senate's Iran-funding fight,
the Belgium strike, Lisbon's cost-of-living march, BepiColombo's arrival at Mercury,
Alcaraz's maiden ATP Finals title, the drawn India–New Zealand Test, and Verstappen's
Las Vegas Grand Prix win — every story verified against reporting from Reuters, AP, BBC,
UN News, ESA, ATP, Formula 1 and Cricinfo.

## How it works

`main.ts` (Node 22, standard library only) copies the pre-rendered `entry.png`
(1024×1024 PNG, under 1 MiB, drawn deterministically with PIL from system fonts)
byte-for-byte to `/output/entry.png`.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
