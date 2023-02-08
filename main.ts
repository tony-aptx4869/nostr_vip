import { nip19 } from "nostr-tools";

export default {
  async fetch(request: Request): Promise<Response> {
    const { pathname, searchParams } = new URL(request.url);
    const name = searchParams.get("name")!;
    if (
      pathname === "/.well-known/nostr.json" &&
      typeof name === "string" &&
      name.startsWith("npub")
    ) {
      return new Response(
        JSON.stringify({ names: { [name]: nip19.decode(name).data } }), {
          headers: {
            "cache-control": "public, max-age=31536000, immutable",
            "access-control-allow-origin": "*"
          }
        }
      );
    }
    if (
      pathname === "/.well-known/nostr.json" &&
      name === "aptx4869"
    ) {
      const decodedMyPubKey = "64aaa73189af814977ff5dedbbab022df030f1d7df3e6307aceb1fddb30df847";
      return new Response(
        JSON.stringify( {
          names: { aptx4869: decodedMyPubKey },
          relays: { [decodedMyPubKey]: [
            "wss://blg.nostr.sx",
            "wss://brb.io",
            "wss://deschooling.us",
            "wss://eden.nostr.land",
            "wss://knostr.neutrine.com",
            "wss://knostr.neutrine.com:8880",
            "wss://lv01.tater.ninja",
            "wss://mule.platanito.org",
            "wss://no-str.org",
            "wss://no.str.cr",
            "wss://no.str.watch",
            "wss://node01.nostress.cc",
            "wss://nos.lol",
            "wss://nostr-01.bolt.observer",
            "wss://nostr-1.nbo.angani.co",
            "wss://nostr-bg01.ciph.rs",
            "wss://nostr-dev.wellorder.net",
            "wss://nostr-pub.semisol.dev",
            "wss://nostr-pub.wellorder.net",
            "wss://nostr-relay.bitcoin.ninja",
            "wss://nostr-relay.derekross.me",
            "wss://nostr-relay.digitalmob.ro",
            "wss://nostr-relay.freedomnode.com",
            "wss://nostr-relay.gkbrk.com",
            "wss://nostr-relay.lnmarkets.com",
            "wss://nostr-relay.usebitcoin.space",
            "wss://nostr-test.elastos.io",
            "wss://nostr-verified.wellorder.net",
            "wss://nostr.21m.fr",
            "wss://nostr.8e23.net",
            "wss://nostr.actn.io",
            "wss://nostr.aozing.com",
            "wss://nostr.badran.xyz",
            "wss://nostr.bch.ninja",
            "wss://nostr.bitcoin.sex",
            "wss://nostr.bitcoiner.social",
            "wss://nostr.blockchaincaffe.it",
            "wss://nostr.blocs.fr",
            "wss://nostr.bongbong.com",
            "wss://nostr.chaker.net",
            "wss://nostr.coincreek.com",
            "wss://nostr.coinos.io",
            "wss://nostr.coollamer.com",
            "wss://nostr.corebreach.com",
            "wss://nostr.d11n.net",
            "wss://nostr.developer.li",
            "wss://nostr.digitalreformation.info",
            "wss://nostr.drss.io",
            "wss://nostr.easydns.ca",
            "wss://nostr.einundzwanzig.space",
            "wss://nostr.ethtozero.fr",
            "wss://nostr.fmt.wiz.biz",
            "wss://nostr.globals.fans",
            "wss://nostr.gromeul.eu",
            "wss://nostr.hackerman.pro",
            "wss://nostr.itssilvestre.com",
            "wss://nostr.jiashanlu.synology.me",
            "wss://nostr.jimc.me",
            "wss://nostr.koning-degraaf.nl",
            "wss://nostr.lnnodeinsight.com",
            "wss://nostr.lnprivate.network",
            "wss://nostr.mado.io",
            "wss://nostr.massmux.com",
            "wss://nostr.member.cash",
            "wss://nostr.milou.lol",
            "wss://nostr.mom",
            "wss://nostr.mustardnodes.com",
            "wss://nostr.nodeofsven.com",
            "wss://nostr.noones.com",
            "wss://nostr.openchain.fr",
            "wss://nostr.orangepill.dev",
            "wss://nostr.orba.ca",
            "wss://nostr.oxtr.dev",
            "wss://nostr.pleb.network",
            "wss://nostr.rdfriedl.com",
            "wss://nostr.satsophone.tk",
            "wss://nostr.shawnyeager.net",
            "wss://nostr.shmueli.org",
            "wss://nostr.sidnlabs.nl",
            "wss://nostr.slothy.win",
            "wss://nostr.snblago.com",
            "wss://nostr.supremestack.xyz",
            "wss://nostr.tools.global.id",
            "wss://nostr.w3ird.tech",
            "wss://nostr.zaprite.io",
            "wss://nostr.zebedee.cloud",
            "wss://nostr.zoomout.chat",
            "wss://nostr1.tunnelsats.com",
            "wss://nostr2.actn.io",
            "wss://nostr21.com",
            "wss://nostr3.actn.io",
            "wss://nostream-production-b80e.up.railway.app",
            "wss://nostream-test.up.railway.app",
            "wss://nostrex.fly.dev",
            "wss://nostrrelay.com",
            "wss://paid.no.str.cr",
            "wss://ragnar-relay.com",
            "wss://relay.alxgsv.com",
            "wss://relay.blackthunder.click",
            "wss://relay.current.fyi",
            "wss://relay.damus.io",
            "wss://relay.grorp.com",
            "wss://relay.honk.pw",
            "wss://relay.kronkltd.net",
            "wss://relay.lexingtonbitcoin.org",
            "wss://relay.n057r.club",
            "wss://relay.nosphr.com",
            "wss://relay.nostr.au",
            "wss://relay.nostr.band",
            "wss://relay.nostr.com.au",
            "wss://relay.nostr.scot",
            "wss://relay.nostr.snblago.com",
            "wss://relay.nostr.vision",
            "wss://relay.nostr.wirednet.jp",
            "wss://relay.nostrich.land",
            "wss://relay.nvote.co",
            "wss://relay.oldcity-bitcoiners.info",
            "wss://relay.realsearch.cc",
            "wss://relay.ryzizub.com",
            "wss://relay.sendstr.com",
            "wss://relay.snort.social",
            "wss://relay.sovereign-stack.org",
            "wss://relay.stoner.com",
            "wss://relay.thes.ai",
            "wss://relay.ypcloud.com",
            "wss://rsslay.nostr.moe",
            "wss://rsslay.nostr.net",
            "wss://student.chadpolytechnic.com",
            "wss://tmp-relay.cesc.trade",
            "wss://zur.nostr.sx"
            ]
          }
        } ), {
          headers: {
            "cache-control": "public, max-age=31536000, immutable",
            "access-control-allow-origin": "*"
          }
        }
      );
    }
    if (pathname === "/") {
      return Response.redirect("https://github.com/tony-aptx4869", 301);
    }
    return new Response(null, { status: 404 });
  },
};
