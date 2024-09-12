import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import idl from "../../backend/target/idl/sol_x.json";

export default function useWalletHook () {
    const { connection } = useConnection();
    const anchorWalletObj = useAnchorWallet();

    // Ensure provider is correctly initialized if wallet is available
    const provider = anchorWalletObj ? new AnchorProvider(connection, anchorWalletObj, AnchorProvider.defaultOptions()) : undefined;

    // Ensure the program is correctly initialized if provider is available
    const program = provider ? new Program(idl as any, provider) : undefined;

    return {
        connection,
        anchorWalletObj,
        provider,
        program
    };
};