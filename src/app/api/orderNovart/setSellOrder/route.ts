import { NextResponse, type NextRequest } from "next/server";

import {
	insertSellOrder,
} from '@lib/api/orderNovart';



export async function POST(request: NextRequest) {

  const body = await request.json();

  const { walletAddress, novartAmount, fietAmount, fietCurrency, rate, privateSale } = body;

  console.log("walletAddress", walletAddress);
  

  const result = await insertSellOrder({
    walletAddress: walletAddress,
    novartAmount: novartAmount,
    fietAmount: fietAmount,
    fietCurrency: fietCurrency,
    rate: rate,
    privateSale: privateSale,
  });


 
  return NextResponse.json({

    result,
    
  });
  
}
