const { db } = require('../../utils/db');
const { hashToken } = require('../../utils/hashToken');


//用于将刷新令牌（refresh token）添加到白名单中。
//根据提供的参数，它会创建一个新的 refreshToken 记录，并将其存储到数据库中。
function addRefreshTokenToWhitelist({ jti, refreshToken, userId }) {
  return db.refreshToken.create({
    data: {
      id: jti,
      hashedToken: hashToken(refreshToken),
      userId
    },
  });
}

function findRefreshTokenById(id) {
  return db.refreshToken.findUnique({
    where: {
      id,
    },
  });
}

function deleteRefreshToken(id) {
  return db.refreshToken.update({
    where: {
      id,
    },
    data: {
      revoked: true
    }
  });
}

function revokeTokens(userId) {
  return db.refreshToken.updateMany({
    where: {
      userId
    },
    data: {
      revoked: true
    }
  });
}

module.exports = {
  addRefreshTokenToWhitelist,
  findRefreshTokenById,
  deleteRefreshToken,
  revokeTokens
};
