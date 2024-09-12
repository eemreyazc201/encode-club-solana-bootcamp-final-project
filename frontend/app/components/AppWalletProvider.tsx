"use client";

import { FC, ReactNode, useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
import * as web3 from "@solana/web3.js";
require("@solana/wallet-adapter-react-ui/styles.css");

const AppWalletProvider: FC<{ children: ReactNode}> = ({ children }) => {
    const endpoint = web3.clusterApiUrl("devnet");
    const wallets = useMemo(
        () => [
            new walletAdapterWallets.PhantomWalletAdapter(),
            new walletAdapterWallets.TorusWalletAdapter(),
            new walletAdapterWallets.SolflareWalletAdapter()
        ],
        []
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default AppWalletProvider;