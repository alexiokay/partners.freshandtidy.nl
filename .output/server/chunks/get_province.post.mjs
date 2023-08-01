import { defineEventHandler, readBody } from 'h3';
import { Client } from '@googlemaps/google-maps-services-js';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'ipx';
import 'http-graceful-shutdown';

const get_province_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const zipCode = body.zipCode;
  console.log("zipCode", zipCode);
  const config = useRuntimeConfig();
  const apiKey = config.GOOGLE_MAPS_API_KEY;
  console.log("apiKey", apiKey);
  new Client({ apiKey });
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&components=country:NL&key=${apiKey}`
    ).then((res) => res.json()).then((data) => {
      return data;
    }).catch((err) => {
      console.log("err", err);
    });
    console.log("response", response);
    if (response.results.length > 0) {
      const result = response.results[0];
      const province = result.address_components.find(
        (component) => component.types.includes("administrative_area_level_1")
      );
      console.log("province", province.long_name);
      if (province) {
        return {
          province: province.long_name,
          status: "OK"
        };
      } else {
        return {
          province: "Province not found"
        };
      }
    } else {
      return {
        province: "No results found"
      };
    }
  } catch (error) {
    console.error("Error:", error.message);
    return {
      province: "Error occurred"
    };
  }
});

export { get_province_post as default };
//# sourceMappingURL=get_province.post.mjs.map
