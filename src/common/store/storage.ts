import EncryptedStorage from 'react-native-encrypted-storage';

const StorageApp = {
  setItem: async (key: string, data: any) => {
    try {
      const value = typeof data === 'string' ? data : JSON.stringify(data);
      await EncryptedStorage.setItem(key, value);
    } catch (e) {
      console.error('Failed to save item:', e);
    }
  },
  getItem: async (key: string) => {
    try {
      const value = await EncryptedStorage.getItem(key);
      if (!value) return null;
      try {
        return JSON.parse(value);
      } catch (e) {
        return value; 
      }
    } catch (e) {
      console.error('Failed to retrieve item:', e);
      return null;
    }
  },
  removeItem: async (key: string) => {
    try {
      await EncryptedStorage.removeItem(key);
    } catch (e) {
      console.error('Failed to remove item:', e);
    }
  },
};

export default StorageApp;
