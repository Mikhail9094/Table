export interface CategoryItem {
        id: number;
        description: string;
        isSoldOut: boolean;
        name: string;
        euroPriceInCents: number;
        designer: string;
        images?: (string)[] | null;
        fake3dImages?: (null)[] | null;
        assetAddress: string;
        slug: string;
        designerSlug: string;
        createdAt: string;
        coverPhotoUrl: string;
        coverVideoUrl: string;
        glbUrl: string;
        usdzUrl: string;
        ogImageUrl: string;
        story: string;
        onlyByPromoCode: boolean;
        saleEnded: boolean;
        saleType: string;
        meta: string;
        categories?: (null)[] | null;
        tokens?: (null)[] | null;
        useCases?: (UseCasesEntity)[] | null;
        sort: number;
        totalSupply: number;
        availableSupply: number;
        promoLeft: number;
        lockedSupply: number;
      }
      
      export interface UseCasesEntity {
        id: number;
        itemId: number;
        title: string;
        icon: string;
        productPageText: string;
        image: string;
        text: string;
        ctaLabel: string;
        ctaLink: string;
        type: string;
        sort: number;
      }
      
      